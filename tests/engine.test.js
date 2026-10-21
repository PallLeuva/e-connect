import test from 'node:test';
import assert from 'node:assert/strict';
import {ITEMS,CITIES,SOURCES,PLACES} from '../data.js';
import {makePlan,conditionsFor,searchItems,photoCandidates,readPlans} from '../engine.js';

test('every supported item, condition and community yields actionable sourced guidance',()=>{
 for(const item of ITEMS)for(const [condition] of conditionsFor(item))for(const city of CITIES){
  const p=makePlan(item.id,condition,city.id);
  assert.ok(p.steps.length>=2);assert.ok(SOURCES[p.source]);assert.ok(p.title);
  for(const place of p.places)assert.ok(place.items.includes(item.id));
  if(city.id==='other')assert.equal(p.places.length,0);
 }
});
test('damaged batteries and electronics never receive ordinary drop-off or reuse suggestions',()=>{
 for(const id of ['battery','laptop','phone','monitor','cables']){
  const p=makePlan(id,'unsafe','aurora');assert.equal(p.action,'Special handling');assert.equal(p.places.length,0);assert.equal(p.idea,null);assert.match(p.steps.join(' '),/manufacturer/);
 }
});
test('broken fluorescent bulbs and leaking paint require contact before transport',()=>{
 for(const id of ['bulb','oilpaint','latexpaint']){const p=makePlan(id,'unsafe','aurora');assert.equal(p.places.length,0);assert.match(p.steps.join(' '),/before arranging transport/);}
});
test('latex paint does not get a hazardous waste facility recommendation',()=>{const p=makePlan('latexpaint','good','aurora');assert.equal(p.places.length,0);assert.match(p.warning,/does not accept latex/);});
test('electronics, loose batteries and textiles use distinct collection programs',()=>{
 assert.deepEqual(makePlan('laptop','end','aurora').places.map(p=>p.id),['ewaste']);
 assert.deepEqual(makePlan('battery','good','aurora').places.map(p=>p.id),['hhw']);
 assert.deepEqual(makePlan('clothing','end','aurora').places.map(p=>p.id),['textiles']);
});
test('damaged furniture and books are not routed to donation',()=>{for(const id of ['furniture','books'])assert.equal(makePlan(id,'end','aurora').places.length,0);});
test('search ranks recognizable terms and leaves unsupported terms empty',()=>{
 assert.equal(searchItems('macbook')[0].id,'laptop');assert.equal(searchItems('latex paint')[0].id,'latexpaint');assert.equal(searchItems('batteries')[0].id,'battery');assert.equal(searchItems('spaceship').length,0);assert.equal(searchItems('').length,ITEMS.length);
});
test('photo suggestions reject low confidence, deduplicate, and ask material for bottles',()=>{
 assert.deepEqual(photoCandidates([{class:'bottle',score:.9},{class:'bottle',score:.8},{class:'laptop',score:.2},{class:'person',score:.99}]).map(i=>i.id),['glass','plastic']);
});
test('corrupt or unexpected local storage is discarded without breaking startup',()=>{
 for(const raw of ['oops','null','{}','123','[null]'])assert.deepEqual(readPlans(raw),[]);
 assert.deepEqual(readPlans('[{"id":"x","itemId":"unknown","condition":"good","city":"aurora"}]'),[]);
 const record={id:'x',itemId:'battery',condition:'unsafe',city:'aurora',done:true,checks:[1,'x']};
 assert.deepEqual(readPlans(JSON.stringify([record]))[0].checks,[1]);
});
test('unsupported selections fail closed',()=>{assert.throws(()=>makePlan('unknown','good','aurora'));assert.throws(()=>makePlan('battery','repair','aurora'));});
test('curated directory points only to HTTPS official source records',()=>{for(const p of PLACES){assert.ok(SOURCES[p.source].url.startsWith('https://'));assert.ok(p.items.every(id=>ITEMS.some(i=>i.id===id)));}});
