import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
const dir=join(process.cwd(),'evals'); let count=0; const errors:string[]=[];
for(const name of await readdir(dir)){ if(!name.endsWith('.json')) continue; const data=JSON.parse(await readFile(join(dir,name),'utf8')); if(!data.skill||!Array.isArray(data.cases)||data.cases.length<2) errors.push(`${name}: invalid shape`); else { count+=data.cases.length; for(const [i,c] of data.cases.entries()) if(typeof c.prompt!=='string'||typeof c.shouldActivate!=='boolean') errors.push(`${name} case ${i}: missing prompt/shouldActivate`); }}
if(errors.length){console.error(errors.join('\n'));process.exit(1)} console.log(`Eval validation passed (${count} cases).`);
