// this script aligns all language files to the en-US file
// if a key is missing from the target language, it will be added with en-US value
// if a key is missing from the en-US file, it will be removed from the target language
// if a key is present in both files, it will be kept as is
// this script also sorts the keys alphabetically
// to parse a language that errors in typescript, you should add at the top of the file:

import * as path from 'node:path';

import * as fs from 'fs';

import { arSA } from '../ar-SA';
import { csCZ } from '../cs-CZ';
import { daDK } from '../da-DK';
import { deDE } from '../de-DE';
import { elGR } from '../el-GR';
import { enUS } from '../en-US';
import { esES } from '../es-ES';
import { esMX } from '../es-MX';
import { frFR } from '../fr-FR';
import { heIL } from '../he-IL';
import { itIT } from '../it-IT';
import { jaJP } from '../ja-JP';
import { koKR } from '../ko-KR';
import { nbNO } from '../nb-NO';
import { nlNL } from '../nl-NL';
import { plPL } from '../pl-PL';
import { ptBR } from '../pt-BR';
import { ptPT } from '../pt-PT';
import { roRO } from '../ro-RO';
import { ruRU } from '../ru-RU';
import { skSK } from '../sk-SK';
import { svSE } from '../sv-SE';
import { trTR } from '../tr-TR';
import { ukUA } from '../uk-UA';
import { viVN } from '../vi-VN';
import { zhCN } from '../zh-CN';
import { zhTW } from '../zh-TW';

function alignKeys(source: any, target: any) {
  // Add or update keys from the source to the target
  Object.keys(source).forEach(key => {
    if (typeof source[key] === 'object' && source[key] !== null) {
      if (!target[key] || typeof target[key] !== 'object') {
        target[key] = {};
      }
      alignKeys(source[key], target[key]);
    } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = source[key];
    }
  });

  // Remove keys in the target that are not in the source
  Object.keys(target).forEach(key => {
    if (!Object.prototype.hasOwnProperty.call(source, key)) {
      delete target[key];
    }
  });
}

function sortObject(obj: any) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const sortedObj = {};
  if (Object.prototype.hasOwnProperty.call(obj, 'locale')) {
    // @ts-ignore
    sortedObj['locale'] = obj['locale'];
  }
  Object.keys(obj)
    .sort()
    .forEach(key => {
      if (key !== 'locale') {
        // @ts-ignore
        sortedObj[key] = sortObject(obj[key]);
      }
    });

  return sortedObj;
}

function run(langObj: any, name: string) {
  const target = langObj;

  alignKeys(enUS, target);
  const sorted = sortObject(target);

  // convert to JSON and write to text file in typescript format
  const json = JSON.stringify(sorted, null, 2);

  fs.writeFileSync(path.join(__dirname, `output/${name}.json`), json);
}

fs.mkdirSync(path.join(__dirname, 'output'), { recursive: true });

run(elGR, 'el-GR');
run(arSA, 'ar-SA');
run(csCZ, 'cs-CZ');
run(daDK, 'da-DK');
run(deDE, 'de-DE');
run(esES, 'es-ES');
run(esMX, 'es-MX');
run(frFR, 'fr-FR');
run(heIL, 'he-IL');
run(itIT, 'it-IT');
run(jaJP, 'ja-JP');
run(koKR, 'ko-KR');
run(nbNO, 'nb-NO');
run(nlNL, 'nl-NL');
run(plPL, 'pl-PL');
run(ptBR, 'pt-BR');
run(ptPT, 'pt-PT');
run(roRO, 'ro-RO');
run(ruRU, 'ru-RU');
run(skSK, 'sk-SK');
run(svSE, 'sv-SE');
run(trTR, 'tr-TR');
run(ukUA, 'uk-UA');
run(viVN, 'vi-VN');
run(zhCN, 'zh-CN');
run(zhTW, 'zh-TW');
