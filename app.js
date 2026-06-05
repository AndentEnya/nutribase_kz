
const CATS={dairy:'Молочка',meat:'Мясо/птица',fish:'Рыба/морепр.',egg:'Яйца',grain:'Крупы/злаки',legume:'Бобовые',veg:'Овощи',fruit:'Фрукты/ягоды',nut:'Орехи/семена',fat:'Масла/жиры',sweet:'Сладкое',sauce:'Соусы/специи',snack:'Снеки/спортпит',fast:'Фастфуд',drink:'Напитки',other:'Разное'};

const SEED=[
  {id:1,n:'Творог 5%',cat:'dairy',k:121,p:17,f:5,c:1.8,note:'Лучший казеин',custom:false},
  {id:2,n:'Творог 0%',cat:'dairy',k:68,p:18,f:0,c:1.8,note:'Максимум белка',custom:false},
  {id:3,n:'Курт (сухой)',cat:'dairy',k:260,p:25,f:14,c:6,note:'★ Местный, дёшево',custom:false},
  {id:4,n:'Курт (мягкий)',cat:'dairy',k:140,p:12,f:8,c:5,note:'★ Базар',custom:false},
  {id:5,n:'Кефир 1%',cat:'dairy',k:40,p:3,f:1,c:4,note:'Пробиотики',custom:false},
  {id:6,n:'Айран',cat:'dairy',k:38,p:1.5,f:1.5,c:4,note:'★ Местный напиток',custom:false},
  {id:7,n:'Греческий йогурт',cat:'dairy',k:97,p:9,f:5,c:3.5,note:'Magnum, дороже',custom:false},
  {id:8,n:'Молоко 2.5%',cat:'dairy',k:52,p:2.8,f:2.5,c:4.7,note:'Базовый',custom:false},
  {id:9,n:'Сыр российский',cat:'dairy',k:360,p:23,f:29,c:0,note:'Жирный',custom:false},
  {id:10,n:'Сыр адыгейский',cat:'dairy',k:240,p:19,f:18,c:0,note:'Менее жирный',custom:false},
  {id:11,n:'Сметана 10%',cat:'dairy',k:115,p:2.9,f:10,c:3.4,note:'Умеренно',custom:false},
  {id:12,n:'Казы',cat:'meat',k:404,p:18,f:36,c:0,note:'★ Местный деликатес',custom:false},
  {id:13,n:'Конина варёная',cat:'meat',k:214,p:25,f:13,c:0,note:'★ Местное мясо',custom:false},
  {id:14,n:'Говядина варёная',cat:'meat',k:254,p:27,f:16,c:0,note:'Классика',custom:false},
  {id:15,n:'Курица грудка',cat:'meat',k:113,p:23,f:2,c:0,note:'Основной белок',custom:false},
  {id:16,n:'Курица бедро б/к',cat:'meat',k:185,p:20,f:12,c:0,note:'Вкуснее, жирнее',custom:false},
  {id:17,n:'Индейка грудка',cat:'meat',k:104,p:20,f:2,c:0,note:'Аналог курицы',custom:false},
  {id:18,n:'Баранина',cat:'meat',k:291,p:17,f:25,c:0,note:'★ Популярна в KZ',custom:false},
  {id:19,n:'Печень говяжья',cat:'meat',k:127,p:20,f:3.7,c:4,note:'Железо, B12',custom:false},
  {id:20,n:'Куриная печень',cat:'meat',k:136,p:20,f:5.9,c:0.7,note:'Микронутриенты',custom:false},
  {id:21,n:'Тунец консерв.',cat:'fish',k:96,p:22,f:1,c:0,note:'Удобно, дёшево',custom:false},
  {id:22,n:'Скумбрия',cat:'fish',k:262,p:18,f:21,c:0,note:'★ Омега-3 как лосось',custom:false},
  {id:23,n:'Горбуша',cat:'fish',k:142,p:21,f:7,c:0,note:'Доступная, Metro',custom:false},
  {id:24,n:'Сельдь',cat:'fish',k:248,p:17,f:20,c:0,note:'Дёшево, Омега-3',custom:false},
  {id:25,n:'Форель',cat:'fish',k:148,p:20,f:7,c:0,note:'Есть в Metro',custom:false},
  {id:26,n:'Минтай',cat:'fish',k:72,p:16,f:1,c:0,note:'Дёшево, нежирный',custom:false},
  {id:27,n:'Кальмар свежий',cat:'fish',k:92,p:18,f:1.4,c:2,note:'Белок + таурин',custom:false},
  {id:28,n:'Кальмар копчёный',cat:'fish',k:242,p:21,f:16,c:0,note:'★ Снек, высокий белок',custom:false},
  {id:29,n:'Креветки варёные',cat:'fish',k:99,p:21,f:1,c:0,note:'Чистый белок',custom:false},
  {id:30,n:'Яйцо куриное',cat:'egg',k:157,p:13,f:11,c:0.7,note:'Полный протеин',custom:false},
  {id:31,n:'Яичный белок',cat:'egg',k:44,p:11,f:0.2,c:0.7,note:'Чистый белок',custom:false},
  {id:32,n:'Яичный желток',cat:'egg',k:352,p:16,f:31,c:0.6,note:'Витамин D, холин',custom:false},
  {id:33,n:'Гречка варёная',cat:'grain',k:132,p:4.5,f:1.6,c:25,note:'★ Лучшая крупа',custom:false},
  {id:34,n:'Рис белый варёный',cat:'grain',k:130,p:2.7,f:0.3,c:28,note:'Классика',custom:false},
  {id:35,n:'Рис бурый варёный',cat:'grain',k:111,p:2.6,f:0.9,c:23,note:'Клетчатка',custom:false},
  {id:36,n:'Овсянка варёная',cat:'grain',k:88,p:3,f:1.7,c:15,note:'Завтрак',custom:false},
  {id:37,n:'Картофель варёный',cat:'grain',k:80,p:2,f:0.1,c:17,note:'Насыщает',custom:false},
  {id:38,n:'Макароны варёные',cat:'grain',k:158,p:5.5,f:0.9,c:31,note:'Удобно',custom:false},
  {id:39,n:'Булгур варёный',cat:'grain',k:83,p:3,f:0.2,c:18,note:'Клетчатка',custom:false},
  {id:40,n:'Чечевица варёная',cat:'legume',k:116,p:9,f:0.4,c:20,note:'★ Дёшево',custom:false},
  {id:41,n:'Нут варёный',cat:'legume',k:164,p:9,f:2.6,c:27,note:'★ Базар',custom:false},
  {id:42,n:'Маш варёный',cat:'legume',k:105,p:7,f:0.4,c:19,note:'★ Местный продукт',custom:false},
  {id:43,n:'Фасоль варёная',cat:'legume',k:127,p:8.7,f:0.5,c:22,note:'Железо',custom:false},
  {id:44,n:'Брокколи',cat:'veg',k:34,p:2.8,f:0.4,c:6.6,note:'Витамин C, K',custom:false},
  {id:45,n:'Огурец',cat:'veg',k:15,p:0.7,f:0.1,c:3,note:'★ Дёшево',custom:false},
  {id:46,n:'Помидор',cat:'veg',k:20,p:0.9,f:0.2,c:3.9,note:'★ Доступен',custom:false},
  {id:47,n:'Перец болгарский',cat:'veg',k:27,p:1,f:0.3,c:5.4,note:'Витамин C',custom:false},
  {id:48,n:'Морковь',cat:'veg',k:41,p:0.9,f:0.2,c:9.6,note:'★ Бета-каротин',custom:false},
  {id:49,n:'Капуста белокочанная',cat:'veg',k:25,p:1.8,f:0.1,c:4.7,note:'★ Дёшево',custom:false},
  {id:50,n:'Тыква',cat:'veg',k:26,p:1,f:0.1,c:6.5,note:'★ Осень, базар',custom:false},
  {id:51,n:'Шпинат',cat:'veg',k:23,p:2.9,f:0.4,c:3.6,note:'Железо',custom:false},
  {id:52,n:'Джусай',cat:'veg',k:34,p:2.4,f:0.4,c:6,note:'★ Казахстан, базар',custom:false},
  {id:53,n:'Зелень (укроп/петр.)',cat:'veg',k:38,p:3,f:0.6,c:6,note:'Витамины',custom:false},
  {id:54,n:'Яблоко',cat:'fruit',k:52,p:0.3,f:0.2,c:13,note:'★ Доступно',custom:false},
  {id:55,n:'Банан',cat:'fruit',k:89,p:1.1,f:0.3,c:23,note:'Перед тренировкой',custom:false},
  {id:56,n:'Арбуз',cat:'fruit',k:30,p:0.6,f:0.2,c:7.6,note:'★ Лето KZ',custom:false},
  {id:57,n:'Дыня',cat:'fruit',k:35,p:0.6,f:0.3,c:8,note:'★ Лето KZ',custom:false},
  {id:58,n:'Урюк/абрикос',cat:'fruit',k:44,p:0.9,f:0.1,c:10,note:'★ Июль-авг, базар',custom:false},
  {id:59,n:'Курага',cat:'fruit',k:215,p:3.4,f:0.5,c:51,note:'Базар, дёшево',custom:false},
  {id:60,n:'Изюм',cat:'fruit',k:299,p:2.5,f:0.5,c:72,note:'Быстрые углеводы',custom:false},
  {id:61,n:'Финики',cat:'fruit',k:282,p:2.5,f:0.4,c:68,note:'Энергия',custom:false},
  {id:62,n:'Грецкий орех',cat:'nut',k:654,p:15,f:65,c:14,note:'★ Дёшево, Омега-3',custom:false},
  {id:63,n:'Миндаль',cat:'nut',k:579,p:21,f:50,c:22,note:'Витамин E',custom:false},
  {id:64,n:'Арахис',cat:'nut',k:567,p:26,f:46,c:16,note:'Дёшево, белок',custom:false},
  {id:65,n:'Арахисовая паста',cat:'nut',k:588,p:25,f:50,c:20,note:'Metro',custom:false},
  {id:66,n:'Семена тыквы',cat:'nut',k:559,p:30,f:49,c:10,note:'★ Базар, цинк',custom:false},
  {id:67,n:'Семена подсолнуха',cat:'nut',k:584,p:21,f:53,c:10,note:'★ Дёшево',custom:false},
  {id:68,n:'Семена льна',cat:'nut',k:534,p:18,f:42,c:29,note:'Омега-3',custom:false},
  {id:69,n:'Масло оливковое',cat:'fat',k:884,p:0,f:100,c:0,note:'Мононенасыщенные',custom:false},
  {id:70,n:'Масло подсолнечное',cat:'fat',k:884,p:0,f:100,c:0,note:'★ Дёшево',custom:false},
  {id:71,n:'Масло льняное',cat:'fat',k:884,p:0,f:100,c:0,note:'Омега-3, не жарить',custom:false},
  {id:72,n:'Масло сливочное',cat:'fat',k:748,p:0.8,f:83,c:0.7,note:'Витамин A',custom:false},
  {id:73,n:'Зефир',cat:'sweet',k:299,p:0.8,f:0,c:73,note:'Нет жира, быстрые У',custom:false},
  {id:74,n:'Мармелад',cat:'sweet',k:321,p:1,f:0.1,c:79,note:'Чистые углеводы',custom:false},
  {id:75,n:'Пастила',cat:'sweet',k:324,p:0.5,f:0,c:80,note:'Без жира',custom:false},
  {id:76,n:'Халва подсолнечная',cat:'sweet',k:516,p:11,f:29,c:54,note:'★ Дёшево',custom:false},
  {id:77,n:'Козинаки',cat:'sweet',k:494,p:10,f:24,c:63,note:'★ Местное',custom:false},
  {id:78,n:'Чак-чак',cat:'sweet',k:469,p:6.4,f:21,c:62,note:'★ Местная выпечка',custom:false},
  {id:79,n:'Шоколад тёмный 80%',cat:'sweet',k:598,p:8,f:42,c:46,note:'Магний, умеренно',custom:false},
  {id:80,n:'Шоколад молочный',cat:'sweet',k:535,p:7,f:30,c:58,note:'Ограничить',custom:false},
  {id:81,n:'Мёд',cat:'sweet',k:304,p:0.3,f:0,c:82,note:'★ Местный',custom:false},
  {id:82,n:'Варенье',cat:'sweet',k:260,p:0.4,f:0.2,c:65,note:'Быстрые углеводы',custom:false},
  {id:83,n:'Конфеты карамель',cat:'sweet',k:396,p:0.3,f:2.8,c:91,note:'Только иногда',custom:false},
  {id:84,n:'Печенье сахарное',cat:'sweet',k:436,p:6,f:14,c:70,note:'Контролировать',custom:false},
  {id:85,n:'Пряник',cat:'sweet',k:336,p:5,f:3,c:74,note:'Глазированный выше',custom:false},
  {id:86,n:'Протеин сывороточный',cat:'snack',k:380,p:75,f:5,c:10,note:'Metro, Kaspi',custom:false},
  {id:87,n:'Протеиновый батончик',cat:'snack',k:350,p:20,f:10,c:40,note:'Смотри состав',custom:false},
  {id:88,n:'Хлебцы рисовые',cat:'snack',k:341,p:6,f:1,c:77,note:'Замена хлебу',custom:false},
  {id:89,n:'Соевый соус',cat:'sauce',k:53,p:8,f:0.1,c:5,note:'Натрий! 1–2 ст.л.',custom:false},
  {id:90,n:'Томатная паста',cat:'sauce',k:82,p:4.8,f:0.5,c:17,note:'Ликопин',custom:false},
  {id:91,n:'Горчица',cat:'sauce',k:67,p:4,f:4,c:5,note:'Мало калорий',custom:false},
  {id:92,n:'Кетчуп',cat:'sauce',k:100,p:1.8,f:0.1,c:25,note:'Сахар, умеренно',custom:false},
  {id:93,n:'Майонез',cat:'sauce',k:624,p:2.8,f:67,c:2.6,note:'Много жира',custom:false},
  {id:94,n:'Имбирь свежий',cat:'sauce',k:80,p:1.8,f:0.8,c:18,note:'Противовоспалит.',custom:false},
  {id:95,n:'Вода',cat:'drink',k:0,p:0,f:0,c:0,note:'2–3 л/день',custom:false},
  {id:96,n:'Чай зелёный',cat:'drink',k:1,p:0,f:0,c:0.2,note:'Антиоксиданты',custom:false},
  {id:97,n:'Кофе чёрный',cat:'drink',k:2,p:0.3,f:0,c:0,note:'Без сахара',custom:false},
  {id:98,n:'Кумыс',cat:'drink',k:50,p:2,f:1.9,c:5,note:'★ Местный, пробиотик',custom:false},
  {id:99,n:'Шубат',cat:'drink',k:58,p:3,f:3,c:4,note:'★ Верблюжье молоко',custom:false},
];

let DB=[],editId=null,dbSortCol=null,dbSortDir=-1,activeCat='all',activeMF='all';
let tdSex='m',activeFtab='mifflin';
let diary=[],diarySel=null;
let profiles={},activeProfile=null;
let pickerMode='day',pickerSeed=Math.random(),excludedCats=new Set(),slotSeeds={},slotClicks={};
let pinnedSlots={}; // "mealKey_rowIdx" -> {foodId, customG}
let swapCtx=null, swapPool=[];

function loadDB(){const s=localStorage.getItem('nkz_db');DB=s?JSON.parse(s):JSON.parse(JSON.stringify(SEED));}
function saveDB(){localStorage.setItem('nkz_db',JSON.stringify(DB));}
function nextId(){return DB.length?Math.max(...DB.map(d=>d.id))+1:1;}
function loadDiary(){const s=localStorage.getItem('nkz_diary');diary=s?JSON.parse(s):[];}
function saveDiary(){localStorage.setItem('nkz_diary',JSON.stringify(diary));}

function toast(msg,type='ok'){const t=document.getElementById('toast');t.textContent=msg;t.className='show '+type;setTimeout(()=>{t.className='';},2600);}

function showPage(id,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  if(btn) btn.classList.add('active');
  const titles={dash:'Главная',db:'База продуктов',add:'Добавить продукт',search:'Поиск продуктов',tdee:'Калькулятор TDEE',plan:'Дневник питания',picker:'Подбор рациона',progress:'Прогресс веса'};
  document.getElementById('topbar-title').textContent=titles[id]||'';
  // sync bottom nav
  document.querySelectorAll('.bnav-btn[data-page]').forEach(b=>b.classList.toggle('active', b.dataset.page===id));
  if(id==='dash')renderDash();
  if(id==='db')renderDB();
  if(id==='tdee')tdeeCalc();
  if(id==='plan')renderDiary();
  if(id==='progress')renderWeightPage();
  // close sidebar on mobile after nav
  if(window.innerWidth<=640) closeSidebar();
}

function buildCatFilters(){
  const el=document.getElementById('cf');
  el.innerHTML='';
  const a=document.createElement('button');a.textContent='Все';a.className='on';
  a.onclick=function(){activeCat='all';setOn(el,this);renderDB();};el.appendChild(a);
  Object.entries(CATS).forEach(([k,v])=>{
    const b=document.createElement('button');b.textContent=v;
    b.onclick=function(){activeCat=k;setOn(el,this);renderDB();};el.appendChild(b);
  });
}
function buildCatSelects(){
  ['add-cat','edit-cat'].forEach(id=>{
    const el=document.getElementById(id);if(!el)return;
    el.innerHTML=Object.entries(CATS).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
  });
}
function setOn(parent,btn){parent.querySelectorAll('button').forEach(b=>b.classList.remove('on'));btn.classList.add('on');}
function setMF(m,btn){activeMF=m;setOn(document.getElementById('mf'),btn);renderDB();}

function renderDB(){
  const q=document.getElementById('db-search').value.toLowerCase();
  let data=DB.filter(d=>{
    if(activeCat!=='all'&&d.cat!==activeCat)return false;
    if(q&&!d.n.toLowerCase().includes(q))return false;
    return true;
  });
  if(activeMF==='p')data=[...data].sort((a,b)=>b.p-a.p).slice(0,40);
  else if(activeMF==='c')data=[...data].sort((a,b)=>b.c-a.c).slice(0,40);
  else if(activeMF==='f')data=[...data].sort((a,b)=>b.f-a.f).slice(0,40);
  if(dbSortCol)data=[...data].sort((a,b)=>{
    const v=typeof a[dbSortCol]==='string'?a[dbSortCol].localeCompare(b[dbSortCol]):a[dbSortCol]-b[dbSortCol];
    return v*dbSortDir;
  });
  document.getElementById('db-count').textContent=`Продуктов: ${data.length} из ${DB.length}`;
  document.getElementById('topbar-count').textContent=`${DB.length} продуктов в базе`;
  document.getElementById('dbt').innerHTML=data.map(d=>`
    <tr>
      <td style="font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d.n}${d.custom?'<span style="color:var(--accent);font-size:10px;margin-left:4px;">●</span>':''}</td>
      <td><span class="chip chip-cat">${CATS[d.cat]||d.cat}</span></td>
      <td class="r macro-k">${d.k}</td>
      <td class="r macro-p">${d.p}</td>
      <td class="r macro-f">${d.f}</td>
      <td class="r macro-c">${d.c}</td>
      <td style="font-size:12px;color:var(--text3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${d.note||''}">${d.note||'—'}</td>
      <td style="text-align:center;white-space:nowrap;">
        <button class="btn btn-sm" onclick="openEdit(${d.id})" style="padding:3px 8px;margin-right:3px;">✎</button>
        <button class="btn btn-sm btn-danger" onclick="delProduct(${d.id})" style="padding:3px 8px;">✕</button>
      </td>
      <td class="db-card-cell">
        <div class="dbc-top">
          <div class="dbc-name">${d.n}${d.custom?'<span class="dbc-dot">●</span>':''}</div>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-sm" onclick="openEdit(${d.id})" style="padding:3px 8px;">✎</button>
            <button class="btn btn-sm btn-danger" onclick="delProduct(${d.id})" style="padding:3px 8px;">✕</button>
          </div>
        </div>
        <div class="dbc-sub">
          <span class="chip chip-cat" style="font-size:10px;">${CATS[d.cat]||d.cat}</span>
          ${d.note?`<span class="dbc-note">${d.note}</span>`:''}
        </div>
        <div class="dbc-macros">
          <span class="dbc-macro macro-k">${d.k}<small>ккал</small></span>
          <span class="dbc-macro macro-p">${d.p}г<small>Б</small></span>
          <span class="dbc-macro macro-f">${d.f}г<small>Ж</small></span>
          <span class="dbc-macro macro-c">${d.c}г<small>У</small></span>
        </div>
      </td>
    </tr>`).join('');
}
function dbSort(col){if(dbSortCol===col)dbSortDir*=-1;else{dbSortCol=col;dbSortDir=-1;}renderDB();}

function addProduct(){
  const n=document.getElementById('add-name').value.trim();
  if(!n){toast('Введи название','err');return;}
  const cat=document.getElementById('add-cat').value;
  const k=parseFloat(document.getElementById('add-k').value)||0;
  const p=parseFloat(document.getElementById('add-p').value)||0;
  const f=parseFloat(document.getElementById('add-f').value)||0;
  const c=parseFloat(document.getElementById('add-c').value)||0;
  const note=document.getElementById('add-note').value.trim();
  DB.push({id:nextId(),n,cat,k,p,f,c,note,custom:true});
  saveDB();clearAdd();toast(`"${n}" добавлен`);
}
function clearAdd(){['add-name','add-k','add-p','add-f','add-c','add-note'].forEach(id=>document.getElementById(id).value='');}

function openEdit(id){
  const d=DB.find(x=>x.id===id);if(!d)return;
  editId=id;
  document.getElementById('edit-name').value=d.n;
  document.getElementById('edit-cat').value=d.cat;
  document.getElementById('edit-k').value=d.k;
  document.getElementById('edit-p').value=d.p;
  document.getElementById('edit-f').value=d.f;
  document.getElementById('edit-c').value=d.c;
  document.getElementById('edit-note').value=d.note||'';
  document.getElementById('edit-modal').classList.add('open');
}
function closeModal(){document.getElementById('edit-modal').classList.remove('open');editId=null;}
function saveEdit(){
  const d=DB.find(x=>x.id===editId);if(!d)return;
  d.n=document.getElementById('edit-name').value.trim()||d.n;
  d.cat=document.getElementById('edit-cat').value;
  d.k=parseFloat(document.getElementById('edit-k').value)||0;
  d.p=parseFloat(document.getElementById('edit-p').value)||0;
  d.f=parseFloat(document.getElementById('edit-f').value)||0;
  d.c=parseFloat(document.getElementById('edit-c').value)||0;
  d.note=document.getElementById('edit-note').value.trim();
  d.custom=true;
  saveDB();closeModal();renderDB();toast('Обновлено');
}
function delProduct(id){
  if(!confirm('Удалить продукт?'))return;
  DB=DB.filter(x=>x.id!==id);saveDB();renderDB();toast('Удалено');
}
function exportDB(){
  const blob=new Blob([JSON.stringify(DB,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='nutribase_kz.json';a.click();
  toast('База экспортирована');
}
function importDB(input){
  const file=input.files[0];if(!file)return;
  const r=new FileReader();
  r.onload=e=>{
    try{const data=JSON.parse(e.target.result);if(!Array.isArray(data))throw 0;DB=data;saveDB();renderDB();toast(`Импортировано: ${data.length}`);}
    catch{toast('Ошибка JSON','err');}
  };
  r.readAsText(file);input.value='';
}

/* USDA */
/* Search tabs */
function switchSearchTab(tab){
  document.getElementById('search-tab-off').style.display = tab==='off' ? '' : 'none';
  document.getElementById('search-tab-usda').style.display = tab==='usda' ? '' : 'none';
  document.getElementById('stab-off').className  = tab==='off'  ? 'on' : '';
  document.getElementById('stab-usda').className = tab==='usda' ? 'on' : '';
}

/* Open Food Facts */
async function offSearch(){
  const q = document.getElementById('off-q').value.trim(); if(!q) return;
  const st = document.getElementById('off-status');
  const wrap = document.getElementById('off-wrap');
  const empty = document.getElementById('off-empty');
  st.innerHTML = '<span class="spin"></span> Поиск...';
  wrap.style.display = 'none'; empty.style.display = 'none';
  try {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(q)}&json=1&action=process&page_size=24&fields=product_name,brands,nutriments,categories_tags`;
    const res = await fetch(url);
    const data = await res.json();
    const products = (data.products || []).filter(p => p.product_name && p.nutriments && p.nutriments['energy-kcal_100g'] != null);
    st.innerHTML = products.length ? `Найдено: <strong style="color:var(--text)">${products.length}</strong> результатов` : '';
    if(!products.length){ empty.style.display = 'block'; return; }
    wrap.style.display = 'block';
    document.getElementById('off-res').innerHTML = products.map(p => {
      const kcal = Math.round(p.nutriments['energy-kcal_100g'] || 0);
      const prot = Math.round((p.nutriments['proteins_100g'] || 0) * 10) / 10;
      const fat  = Math.round((p.nutriments['fat_100g'] || 0) * 10) / 10;
      const carb = Math.round((p.nutriments['carbohydrates_100g'] || 0) * 10) / 10;
      const brand = p.brands ? `<span style="color:var(--text3)">${p.brands.split(',')[0]}</span>` : '';
      const safeName = (p.product_name || '').replace(/'/g, "\\'");
      const cats = (p.categories_tags || []).join(',');
      return `<div class="ext-result">
        <div>
          <div class="ext-name">${p.product_name}</div>
          <div class="ext-brand">${brand}</div>
          <div class="ext-macros"><span class="macro-k">${kcal} ккал</span><span class="macro-p">Б: ${prot}г</span><span class="macro-f">Ж: ${fat}г</span><span class="macro-c">У: ${carb}г</span></div>
        </div>
        <button class="btn btn-sm btn-accent" onclick="offAdd('${safeName}','${cats}',${kcal},${prot},${fat},${carb})">+ В базу</button>
      </div>`;
    }).join('');
  } catch(e) {
    st.innerHTML = '<span style="color:var(--red)">Ошибка запроса. Нужен интернет.</span>';
  }
}

const offCatMap = {
  'en:meats':'meat','en:poultry':'meat','en:beef':'meat','en:fish':'fish','en:seafood':'fish',
  'en:dairy':'dairy','en:milk':'dairy','en:cheeses':'dairy','en:yogurts':'dairy',
  'en:eggs':'egg','en:cereals':'grain','en:breads':'grain','en:pastas':'grain','en:rice':'grain',
  'en:legumes':'legume','en:vegetables':'veg','en:fruits':'fruit','en:nuts':'nut',
  'en:oils':'fat','en:sweets':'sweet','en:beverages':'drink','en:snacks':'snack'
};
function offAdd(name, cats, k, p, f, c){
  let cat = 'other';
  if(cats){ const tag = cats.split(',').find(t => offCatMap[t.trim()]); if(tag) cat = offCatMap[tag.trim()]; }
  const n = prompt('Название в базе (можно переименовать):', name); if(!n) return;
  DB.push({id:nextId(), n, cat, k, p, f, c, note:'Open Food Facts', custom:true});
  saveDB(); toast(`"${n}" добавлен`);
}

async function usdaSearch(){
  const q=document.getElementById('usda-q').value.trim();if(!q)return;
  const type=document.getElementById('usda-type').value;
  const st=document.getElementById('usda-status');
  const wrap=document.getElementById('usda-wrap');
  const empty=document.getElementById('usda-empty');
  st.innerHTML='<span class="spin"></span> Поиск...';
  wrap.style.display='none';empty.style.display='none';
  try{
    const url=`https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(q)}&dataType=${encodeURIComponent(type)}&pageSize=20&api_key=DEMO_KEY`;
    const res=await fetch(url);const data=await res.json();
    const foods=data.foods||[];
    st.innerHTML=foods.length?`Найдено: <strong style="color:var(--text)">${foods.length}</strong> результатов`:'';
    if(!foods.length){empty.style.display='block';return;}
    wrap.style.display='block';
    document.getElementById('usda-res').innerHTML=foods.map(f=>{
      const nut=f.foodNutrients||[];
      const get=id=>{const n=nut.find(x=>x.nutrientId===id||x.nutrientNumber==id);return n?Math.round(n.value*10)/10:0;};
      const kcal=get(1008)||get(208);const prot=get(1003)||get(203);const fat=get(1004)||get(204);const carb=get(1005)||get(205);
      return `<div class="ext-result">
        <div>
          <div class="ext-name">${f.description}</div>
          <div class="ext-brand">${f.brandOwner||f.foodCategory||''}</div>
          <div class="ext-macros"><span class="macro-k">${kcal} ккал</span><span class="macro-p">Б: ${prot}г</span><span class="macro-f">Ж: ${fat}г</span><span class="macro-c">У: ${carb}г</span></div>
        </div>
        <button class="btn btn-sm btn-accent" onclick="usdaAdd('${f.description.replace(/'/g,"\\'")}','${f.foodCategory||'other'}',${kcal},${prot},${fat},${carb})">+ В базу</button>
      </div>`;
    }).join('');
  }catch(e){st.innerHTML='<span style="color:var(--red)">Ошибка запроса. Нужен интернет.</span>';}
}
const catMap={'Poultry Products':'meat','Beef Products':'meat','Pork Products':'meat','Finfish and Shellfish Products':'fish','Dairy and Egg Products':'dairy','Vegetables and Vegetable Products':'veg','Fruits and Fruit Juices':'fruit','Legumes and Legume Products':'legume','Nut and Seed Products':'nut','Fats and Oils':'fat','Sweets':'sweet','Beverages':'drink','Cereal Grains and Pasta':'grain','Snacks':'snack'};
function usdaAdd(name,catRaw,k,p,f,c){
  const cat=catMap[catRaw]||'other';
  const n=prompt('Название в базе (можно переименовать):',name);if(!n)return;
  DB.push({id:nextId(),n,cat,k,p,f,c,note:'USDA',custom:true});saveDB();toast(`"${n}" добавлен`);
}

/* TDEE */
function tdeeSetSex(s){
  tdSex=s;
  document.getElementById('tdee-m').className=s==='m'?'on':'';
  document.getElementById('tdee-f').className=s==='f'?'on':'';
  tdeeCalc();
}
function setFtabById(f){
  activeFtab=f;
  document.querySelectorAll('.ftab').forEach((b,i)=>{
    const fms=['mifflin','harris','katch'];
    b.classList.toggle('on',fms[i]===f);
  });
  tdeeCalc();
}
function setFtab(f,btn){
  activeFtab=f;
  document.querySelectorAll('.ftab').forEach(b=>b.classList.remove('on'));btn.classList.add('on');
  tdeeCalc();
}

function calcBMR(wt,ht,age,bf,s,formula){
  if(formula==='mifflin')return s==='m'?10*wt+6.25*ht-5*age+5:10*wt+6.25*ht-5*age-161;
  if(formula==='harris')return s==='m'?88.36+13.4*wt+4.8*ht-5.7*age:447.6+9.25*wt+3.1*ht-4.3*age;
  if(formula==='katch'){const lbm=wt*(1-bf/100);return 370+21.6*lbm;}
  return 0;
}

function tdeeCalc(){
  const wt=+document.getElementById('sl-wt').value;
  const ht=+document.getElementById('sl-ht').value;
  const age=+document.getElementById('sl-age').value;
  const bf=+document.getElementById('sl-bf').value;
  const act=+document.getElementById('sl-act').value;
  const goal=+document.getElementById('sl-goal').value;
  document.getElementById('lbl-wt').textContent=wt;
  document.getElementById('lbl-ht').textContent=ht;
  document.getElementById('lbl-age').textContent=age;
  document.getElementById('lbl-bf').textContent=bf;

  const bmr=Math.round(calcBMR(wt,ht,age,bf,tdSex,activeFtab));
  const tdee=Math.round(bmr*act);
  const target=tdee+goal;

  document.getElementById('r-bmr').textContent=bmr.toLocaleString();
  document.getElementById('r-tdee').textContent=tdee.toLocaleString();
  document.getElementById('r-target').textContent=target.toLocaleString();
  const subs={'-500':'Дефицит → ~−0.5 кг/нед','-300':'Дефицит → ~−0.3 кг/нед','0':'Поддержание веса','200':'Профицит → ~+0.2 кг/нед','400':'Профицит → ~+0.4 кг/нед'};
  document.getElementById('r-sub').textContent=subs[goal]||'';

  // Макросы: белок приоритет, минимум углеводов 1.5г/кг (но ≥120г), жиры — остаток
  const protPerKg = goal < 0 ? 2.2 : 2.0;
  let prot = Math.round(wt * protPerKg);
  const carbMinG = Math.max(120, Math.round(wt * 1.5));
  const fatMinG = Math.max(40, Math.round(wt * 0.6));
  // Если белок + мин.углеводы + мин.жиры > цели — постепенно режем белок
  while (prot * 4 + carbMinG * 4 + fatMinG * 9 > target && prot > Math.round(wt * 1.6)) {
    prot -= 5;
  }
  const protKcal = prot * 4;
  const carbMinKcal = carbMinG * 4;
  const remainForFat = target - protKcal - carbMinKcal;
  const fat = Math.min(Math.max(Math.round(remainForFat / 9), fatMinG), Math.round(wt * 1.2));
  const fatKcal = fat * 9;
  const carbKcal2 = Math.max(target - protKcal - fatKcal, carbMinKcal);
  const carb = Math.round(carbKcal2 / 4);
  const bars=[
    {name:'Белок',g:prot,kcal:protKcal,pct:Math.round(protKcal/target*100),color:'var(--blue)'},
    {name:'Углеводы',g:carb,kcal:carbKcal2,pct:Math.round(carbKcal2/target*100),color:'var(--accent)'},
    {name:'Жиры',g:fat,kcal:fatKcal,pct:Math.round(fatKcal/target*100),color:'var(--green)'},
  ];
  document.getElementById('tdee-macros').innerHTML=bars.map(b=>`
    <div class="mc">
      <div class="mc-name">${b.name}</div>
      <div class="mc-g" style="color:${b.color};">${b.g}<span style="font-size:12px;font-weight:400;color:var(--text2);margin-left:2px;">г</span></div>
      <div class="mc-info">${b.kcal} ккал · ${b.pct}%</div>
      <div class="mc-bar"><div class="mc-bar-fill" style="width:${Math.min(b.pct,100)}%;background:${b.color};"></div></div>
    </div>`).join('');
  // water calc
  const actCoef=+document.getElementById('sl-act').value;
  const waterBase=Math.round(wt*30)/1000;
  const waterActAdd=actCoef>=1.725?0.7:actCoef>=1.55?0.5:actCoef>=1.375?0.3:0.1;
  const waterTotal=(waterBase+waterActAdd).toFixed(1);
  document.getElementById('r-water').textContent=waterTotal;
  document.getElementById('w-base').textContent=(waterBase).toFixed(1)+' л';
  document.getElementById('w-act').textContent='+'+waterActAdd.toFixed(1)+' л';
  const tips=['Пей равномерно, стакан каждые 1.5–2 часа','Первый стакан сразу после подъёма','Не пей много за раз — по 200–250мл'];
  document.getElementById('w-tip').textContent=tips[Math.floor(Math.random()*tips.length)];
  // hr zones
  buildHRZones(age);
  // quick stats
  const protG=prot; // use corrected prot from macro calc above
  const weekKg=goal!==0?(Math.abs(goal)*7/7700).toFixed(2):0;
  const weekStr=goal<0?'-'+weekKg:goal>0?'+'+weekKg:'0';
  document.getElementById('qs-prot').textContent=protG+'г';
  document.getElementById('qs-week').textContent=weekStr+' кг';
  document.getElementById('qs-pmeal').textContent=Math.round(protG/5)+'г';
  document.getElementById('qs-kmeal').textContent=Math.round(target/5)+' ккал';
  buildSchedule();

  const notes={
    mifflin:'<strong>Рекомендуется по умолчанию.</strong> Наиболее точная для большинства людей (погрешность ±10%). Разработана в 1990г. на основе современных исследований метаболизма.',
    harris:'<strong>Классическая формула (1919, пересмотрена в 1984).</strong> Чуть завышает BMR на 5–10% по сравнению с Mifflin. Подходит как контрольный расчёт.',
    katch:'<strong>Лучшая для спортсменов.</strong> Работает от сухой мышечной массы (LBM), не делит по полу. Точнее при высоком % мышц. Укажи реальный % жира для точного результата.'
  };
  document.getElementById('ftab-note').innerHTML=notes[activeFtab];

  let fHtml='';
  const lbm=Math.round(wt*(1-bf/100)*10)/10;
  if(activeFtab==='mifflin'){
    fHtml=tdSex==='m'
      ?`BMR = 10 × <span class="hl">${wt}</span> + 6.25 × <span class="hl">${ht}</span> − 5 × <span class="hl">${age}</span> + 5 = <span class="hl">${bmr} ккал</span>`
      :`BMR = 10 × <span class="hl">${wt}</span> + 6.25 × <span class="hl">${ht}</span> − 5 × <span class="hl">${age}</span> − 161 = <span class="hl">${bmr} ккал</span>`;
  }else if(activeFtab==='harris'){
    fHtml=tdSex==='m'
      ?`BMR = 88.36 + 13.4 × <span class="hl">${wt}</span> + 4.8 × <span class="hl">${ht}</span> − 5.7 × <span class="hl">${age}</span> = <span class="hl">${bmr} ккал</span>`
      :`BMR = 447.6 + 9.25 × <span class="hl">${wt}</span> + 3.1 × <span class="hl">${ht}</span> − 4.3 × <span class="hl">${age}</span> = <span class="hl">${bmr} ккал</span>`;
  }else{
    fHtml=`LBM (сухая масса) = ${wt} × (1 − ${bf}/100) = <span class="hl">${lbm} кг</span><br>BMR = 370 + 21.6 × <span class="hl">${lbm}</span> = <span class="hl">${bmr} ккал</span>`;
  }
  fHtml+=`<br>TDEE = <span class="hl">${bmr}</span> × <span class="hl">${act}</span> = <span class="hl">${tdee} ккал</span>`;
  fHtml+=`<br>Цель = <span class="hl">${tdee}</span> + (<span class="hl">${goal}</span>) = <span class="hl">${target} ккал</span>`;
  document.getElementById('tdee-formula').innerHTML=fHtml;

  const fms=['mifflin','harris','katch'];
  const fNames={'mifflin':'Mifflin','harris':'Harris-B.','katch':'Katch'};
  document.getElementById('formula-compare').innerHTML=fms.map(fm=>{
    const b=Math.round(calcBMR(wt,ht,age,bf,tdSex,fm));
    const t=Math.round(b*act);
    const isActive=fm===activeFtab;
    return `<div class="cmp${isActive?' active':''}" onclick="setFtabById('${fm}')">
      <div class="cmp-name">${fNames[fm]}</div>
      <div class="cmp-bmr">${b}</div>
      <div class="cmp-tdee">TDEE: ${t} ккал</div>
    </div>`;
  }).join('');
}

/* DIARY */
function diarySuggest(){
  const q=document.getElementById('diary-s').value.toLowerCase();
  const box=document.getElementById('diary-sug');
  diarySel=null;
  document.getElementById('diary-prev').style.display='none';
  if(q.length<2){box.innerHTML='';return;}
  const matches=DB.filter(d=>d.n.toLowerCase().includes(q)).slice(0,8);
  if(!matches.length){box.innerHTML='';return;}
  box.innerHTML=`<div style="background:var(--bg3);border:1px solid var(--border2);border-radius:var(--r2);margin-top:2px;max-height:220px;overflow-y:auto;z-index:50;position:relative;">
    ${matches.map(d=>`<div onclick="diarySelect(${d.id})" style="padding:8px 12px;cursor:pointer;font-size:13px;border-bottom:1px solid var(--border);"
      onmouseover="this.style.background='var(--bg4)'" onmouseout="this.style.background=''">
      ${d.n} <span style="color:var(--text3);font-size:11px;">${d.k}ккал · Б${d.p} Ж${d.f} У${d.c}</span>
    </div>`).join('')}
  </div>`;
}
function diarySelect(id){
  diarySel=DB.find(d=>d.id===id);if(!diarySel)return;
  document.getElementById('diary-s').value=diarySel.n;
  document.getElementById('diary-sug').innerHTML='';
  updateDiaryPrev();
}
function updateDiaryPrev(){
  if(!diarySel)return;
  const g=parseFloat(document.getElementById('diary-g').value)||100;
  const m=g/100;
  const prev=document.getElementById('diary-prev');
  prev.style.display='block';
  prev.innerHTML=`<div style="font-size:11px;color:var(--text3);margin-bottom:5px;">На ${g}г:</div>
    <div style="display:flex;gap:14px;font-size:13px;">
      <span class="macro-k">${Math.round(diarySel.k*m)} ккал</span>
      <span class="macro-p">Б: ${Math.round(diarySel.p*m*10)/10}г</span>
      <span class="macro-f">Ж: ${Math.round(diarySel.f*m*10)/10}г</span>
      <span class="macro-c">У: ${Math.round(diarySel.c*m*10)/10}г</span>
    </div>`;
}
function diaryAdd(){
  if(!diarySel){toast('Выбери продукт','err');return;}
  const g=parseFloat(document.getElementById('diary-g').value)||100;
  const meal=document.getElementById('diary-meal').value;
  const m=g/100;
  diary.push({id:Date.now(),productId:diarySel.id,name:diarySel.n,grams:g,meal,
    k:Math.round(diarySel.k*m),p:Math.round(diarySel.p*m*10)/10,
    f:Math.round(diarySel.f*m*10)/10,c:Math.round(diarySel.c*m*10)/10});
  saveDiary();renderDiary();
  document.getElementById('diary-s').value='';
  document.getElementById('diary-prev').style.display='none';
  diarySel=null;toast('Добавлено');
}
function diaryRemove(id){diary=diary.filter(x=>x.id!==id);saveDiary();renderDiary();}
function clearDiary(){if(confirm('Очистить день?')){diary=[];saveDiary();renderDiary();}}
function renderDiary(){
  const totK=diary.reduce((s,x)=>s+x.k,0);
  const totP=Math.round(diary.reduce((s,x)=>s+x.p,0)*10)/10;
  const totF=Math.round(diary.reduce((s,x)=>s+x.f,0)*10)/10;
  const totC=Math.round(diary.reduce((s,x)=>s+x.c,0)*10)/10;
  document.getElementById('d-k').textContent=totK;
  document.getElementById('d-p').textContent=totP+'г';
  document.getElementById('d-f').textContent=totF+'г';
  document.getElementById('d-c').textContent=totC+'г';
  const meals=['Завтрак','Перекус 1','Обед','Перекус 2','Ужин'];
  document.getElementById('diary-list').innerHTML=meals.map(meal=>{
    const items=diary.filter(x=>x.meal===meal);if(!items.length)return '';
    const mK=items.reduce((s,x)=>s+x.k,0);
    return `<div class="card" style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-size:13px;font-weight:600;">${meal}</div>
        <div style="font-size:12px;color:var(--text3);">${mK} ккал</div>
      </div>
      ${items.map(x=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-top:1px solid var(--border);">
        <div>
          <div style="font-size:13px;">${x.name} <span style="color:var(--text3);font-size:11px;">${x.grams}г</span></div>
          <div style="font-size:12px;margin-top:2px;display:flex;gap:10px;">
            <span class="macro-k">${x.k}ккал</span><span class="macro-p">Б${x.p}</span><span class="macro-f">Ж${x.f}</span><span class="macro-c">У${x.c}</span>
          </div>
        </div>
        <button class="btn btn-sm btn-danger" onclick="diaryRemove(${x.id})" style="padding:3px 8px;">✕</button>
      </div>`).join('')}
    </div>`;
  }).join('');
}

document.getElementById('diary-g').addEventListener('input',updateDiaryPrev);



/* ===== WATER buildHRZones ===== */
function buildHRZones(age) {
  if(!age) age=+document.getElementById('sl-age').value||28;
  const maxHR=220-age;
  document.getElementById('hr-max').textContent=maxHR;
  const zones=[
    {name:'Разминка',pct:[50,60],color:'#4a8cff',bg:'rgba(74,140,255,.08)',desc:'Разминка, восстановление. Комфортный темп, можно говорить.'},
    {name:'Жиросжигание',pct:[60,70],color:'#4ed68a',bg:'rgba(78,214,138,.08)',desc:'Активное жиросжигание. Основная зона для похудения — 60% энергии из жира.'},
    {name:'Аэробная',pct:[70,80],color:'#e8b84b',bg:'rgba(232,184,75,.08)',desc:'Кардио-выносливость. Улучшает работу сердца, 40% жир / 60% глюкоза.'},
    {name:'Анаэробная',pct:[80,90],color:'#ff8c42',bg:'rgba(255,140,66,.08)',desc:'Силовая выносливость. Лактатный порог, в основном глюкоза.'},
    {name:'МПК / Макс.',pct:[90,100],color:'#ff6b6b',bg:'rgba(255,107,107,.08)',desc:'Максимальная нагрузка. Только для подготовленных спортсменов, короткие интервалы.'},
  ];
  const el=document.getElementById('hr-zones');
  el.innerHTML=zones.map(z=>{
    const lo=Math.round(maxHR*z.pct[0]/100);
    const hi=Math.round(maxHR*z.pct[1]/100);
    return `<div class="hrz" style="background:${z.bg};border-color:${z.color}22;">
      <div class="hrz-dot" style="background:${z.color};"></div>
      <div class="hrz-name">${z.name}</div>
      <div class="hrz-range" style="color:${z.color};">${lo}–${hi}</div>
      <div class="hrz-pct">${z.pct[0]}–${z.pct[1]}% от макс.</div>
      <div class="hrz-desc">${z.desc}</div>
      <div class="hrz-bar-wrap"><div class="hrz-bar" style="width:${z.pct[1]}%;background:${z.color};"></div></div>
    </div>`;
  }).join('');
}

/* ===== SCHEDULE ===== */
function buildSchedule() {
  const wake=document.getElementById('sc-wake').value||'11:00';
  const sleep=document.getElementById('sc-sleep').value||'03:00';
  const gym=document.getElementById('sc-gym').value||'20:00';
  const mealCount=+document.getElementById('sc-meals').value||5;

  function toMin(t){const[h,m]=t.split(':').map(Number);return h*60+m;}
  function toStr(min){min=((min%1440)+1440)%1440;const h=Math.floor(min/60)%24;const m=min%60;return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;}

  const wakeMin=toMin(wake);
  const sleepMin=toMin(sleep);
  const gymMin=toMin(gym);
  const awakeSpan=((sleepMin-wakeMin)+1440)%1440;

  // Build meal times spread across awake window
  const targetKcal=+document.getElementById('r-target').textContent.replace(/[\s,]/g,'')||2500;

  const meals5=[
    {name:'Завтрак',type:'main',offset:0.05,pct:0.25,tip:'Белок + сложные углеводы + жиры'},
    {name:'Перекус 1',type:'snack',offset:0.28,pct:0.12,tip:'Фрукт + творог или орехи'},
    {name:'Обед',type:'main',offset:0.48,pct:0.30,tip:'Белок + углеводы + овощи'},
    {name:'Перекус 2',type:'snack',offset:0.68,pct:0.10,tip:'Перед тренировкой: банан + протеин'},
    {name:'Ужин',type:'main',offset:0.88,pct:0.23,tip:'Белок + овощи, меньше углеводов'},
  ];
  const meals4=[
    {name:'Завтрак',type:'main',offset:0.05,pct:0.30,tip:'Белок + сложные углеводы'},
    {name:'Обед',type:'main',offset:0.35,pct:0.30,tip:'Главный приём — полное КБЖУ'},
    {name:'Перекус',type:'snack',offset:0.65,pct:0.15,tip:'Лёгкий, перед тренировкой'},
    {name:'Ужин',type:'main',offset:0.88,pct:0.25,tip:'Белок + овощи'},
  ];
  const meals6=[
    {name:'Завтрак',type:'main',offset:0.03,pct:0.22,tip:'Белок + углеводы'},
    {name:'Перекус 1',type:'snack',offset:0.20,pct:0.10,tip:'Фрукт или кисломолочное'},
    {name:'Обед',type:'main',offset:0.38,pct:0.25,tip:'Полное КБЖУ'},
    {name:'Перекус 2',type:'snack',offset:0.57,pct:0.10,tip:'До тренировки: быстрые углеводы'},
    {name:'Ужин',type:'main',offset:0.75,pct:0.23,tip:'Белок + овощи'},
    {name:'Поздний перекус',type:'snack',offset:0.92,pct:0.10,tip:'Творог 0% или казеин'},
  ];
  const template=mealCount===4?meals4:mealCount===6?meals6:meals5;

  // Shift pre-workout meal near gym time if possible
  const list=document.getElementById('sched-list');
  list.innerHTML=template.map(m=>{
    let mealMin=wakeMin+Math.round(awakeSpan*m.offset);
    // snap pre-gym snack to 90min before gym
    if(m.tip.includes('тренировк')&&gymMin){
      mealMin=((gymMin-90)+1440)%1440;
    }
    const kcal=Math.round(targetKcal*m.pct);
    return `<div class="ms-item ms-${m.type}">
      <span class="ms-time">${toStr(mealMin)}</span>
      <div>
        <div class="ms-name">${m.name}</div>
        <div class="ms-tip">${m.tip}</div>
      </div>
      <span class="ms-kcal">${kcal} ккал</span>
    </div>`;
  }).join('');
}


/* ════════════════════════════════════════════
   ПРОФИЛИ ПОЛЬЗОВАТЕЛЕЙ
════════════════════════════════════════════ */

function loadProfiles() {
  const s = localStorage.getItem('nkz_profiles');
  profiles = s ? JSON.parse(s) : {};
  const ap = localStorage.getItem('nkz_active_profile');
  if (ap && profiles[ap]) { activeProfile = ap; applyProfile(profiles[ap]); }
  renderProfileChips();
}

function saveProfiles() { localStorage.setItem('nkz_profiles', JSON.stringify(profiles)); }

function gatherCurrentState() {
  return {
    sex: tdSex,
    age: document.getElementById('sl-age').value,
    ht:  document.getElementById('sl-ht').value,
    wt:  document.getElementById('sl-wt').value,
    bf:  document.getElementById('sl-bf').value,
    act: document.getElementById('sl-act').value,
    goal: document.getElementById('sl-goal').value,
    wake: document.getElementById('sc-wake').value,
    sleep: document.getElementById('sc-sleep').value,
    gym:  document.getElementById('sc-gym').value,
    mealCount: document.getElementById('sc-meals').value,
    formula: activeFtab,
    diary: diary,
    savedAt: new Date().toLocaleDateString('ru'),
  };
}

function applyProfile(p) {
  if (!p) return;
  tdSex = p.sex || 'm';
  document.getElementById('tdee-m').className = tdSex==='m'?'on':'';
  document.getElementById('tdee-f').className = tdSex==='f'?'on':'';
  if (p.age)  document.getElementById('sl-age').value = p.age;
  if (p.ht)   document.getElementById('sl-ht').value  = p.ht;
  if (p.wt)   document.getElementById('sl-wt').value  = p.wt;
  if (p.bf)   document.getElementById('sl-bf').value  = p.bf;
  if (p.act)  document.getElementById('sl-act').value = p.act;
  if (p.goal) document.getElementById('sl-goal').value = p.goal;
  if (p.wake) document.getElementById('sc-wake').value = p.wake;
  if (p.sleep) document.getElementById('sc-sleep').value = p.sleep;
  if (p.gym)  document.getElementById('sc-gym').value = p.gym;
  if (p.mealCount) document.getElementById('sc-meals').value = p.mealCount;
  if (p.formula) { activeFtab = p.formula; document.querySelectorAll('.ftab').forEach((b,i)=>{ b.classList.toggle('on',['mifflin','harris','katch'][i]===activeFtab); }); }
  if (p.diary) { diary = p.diary; saveDiary(); renderDiary(); }
  tdeeCalc();
  toast('Профиль загружен: ' + Object.keys(profiles).find(k=>profiles[k]===p));
}

function saveCurrentProfile() {
  if (!activeProfile) { createProfile(); return; }
  profiles[activeProfile] = gatherCurrentState();
  saveProfiles();
  localStorage.setItem('nkz_active_profile', activeProfile);
  toast('Профиль сохранён: ' + activeProfile);
}

function createProfile() {
  const name = prompt('Имя профиля (например: Макс, Клиент 1):');
  if (!name || !name.trim()) return;
  const n = name.trim();
  profiles[n] = gatherCurrentState();
  activeProfile = n;
  saveProfiles();
  localStorage.setItem('nkz_active_profile', n);
  renderProfileChips();
  toast('Профиль создан: ' + n);
}

function switchProfile(name) {
  activeProfile = name;
  localStorage.setItem('nkz_active_profile', name);
  applyProfile(profiles[name]);
  renderProfileChips();
}

function deleteProfile(name) {
  if (!confirm('Удалить профиль «' + name + '»?')) return;
  delete profiles[name];
  if (activeProfile === name) activeProfile = Object.keys(profiles)[0] || null;
  saveProfiles();
  if (activeProfile) localStorage.setItem('nkz_active_profile', activeProfile);
  renderProfileChips();
  toast('Профиль удалён');
}

function renderProfileChips() {
  const el = document.getElementById('profile-chips');
  if (!el) return;
  el.innerHTML = Object.keys(profiles).map(name => {
    const p = profiles[name];
    const isActive = name === activeProfile;
    return `<div class="profile-chip ${isActive?'active':''}" onclick="switchProfile('${name.replace(/'/g,"\'")}')">
      ${name}
      ${p.savedAt ? `<span style="font-size:10px;opacity:.6;margin-left:2px;">${p.savedAt}</span>` : ''}
      <span class="pc-del" onclick="event.stopPropagation();deleteProfile('${name.replace(/'/g,"\'")}')">×</span>
    </div>`;
  }).join('');
}

/* ════════════════════════════════════════════
   ПОДБОР РАЦИОНА
════════════════════════════════════════════ */

function setPickerMode(m, btn) {
  pickerMode = m;
}

function pullFromTDEE() {
  const t = document.getElementById('r-target').textContent.replace(/[^0-9]/g,'');
  if (!t) { toast('Сначала рассчитай TDEE', 'err'); return; }
  // read macro values from the bars
  const bars = document.querySelectorAll('#tdee-macros .mc');
  if (bars.length >= 3) {
    const pg = bars[0].querySelector('.mc-g').textContent.replace(/[^0-9]/g,'');
    const cg = bars[1].querySelector('.mc-g').textContent.replace(/[^0-9]/g,'');
    const fg = bars[2].querySelector('.mc-g').textContent.replace(/[^0-9]/g,'');
    document.getElementById('pk-kcal').value = t;
    document.getElementById('pk-p').value = pg;
    document.getElementById('pk-c').value = cg;
    document.getElementById('pk-f').value = fg;
  } else {
    document.getElementById('pk-kcal').value = t;
  }
  runPicker();
  toast('Макросы подтянуты из TDEE');
}

function buildExcludeButtons() {
  const el = document.getElementById('pk-exclude');
  if (!el) return;
  const cats = ['dairy','meat','fish','sweet','fast'];
  const labels = {dairy:'Молочка',meat:'Мясо',fish:'Рыба',sweet:'Сладкое',fast:'Фастфуд'};
  el.innerHTML = cats.map(c => `<button onclick="toggleExclude('${c}',this)" style="padding:3px 9px;border-radius:12px;border:1px solid var(--border2);background:transparent;color:var(--text2);font-size:11px;cursor:pointer;transition:all .15s;" id="exc-${c}">${labels[c]}</button>`).join('');
}

function toggleExclude(cat, btn) {
  if (excludedCats.has(cat)) { excludedCats.delete(cat); btn.style.background='transparent'; btn.style.color='var(--text2)'; }
  else { excludedCats.add(cat); btn.style.background='rgba(255,107,107,.15)'; btn.style.color='var(--red)'; btn.style.borderColor='rgba(255,107,107,.4)'; }
  runPicker();
}

function shufflePicker() {
  pickerSeed = Math.random(); slotSeeds = {}; slotClicks = {};
  // Clear only unpinned slots
  Object.keys(pinnedSlots).forEach(k=>{ if(!pinnedSlots[k].foodId && !pinnedSlots[k].customG) delete pinnedSlots[k]; });
  runPicker();
}

// Seeded random using pickerSeed for reproducible shuffles
function seededRand(seed) { let x=Math.sin(seed)*10000; return x-Math.floor(x); }

function runPicker() {
  slotSeeds = {}; slotClicks = {}; // full reset on new run
  runPickerDayKeepState();
}

function runPickerDayKeepState() {
  const kcal = +document.getElementById('pk-kcal').value || 2500;
  const tp   = +document.getElementById('pk-p').value || 180;
  const tf   = +document.getElementById('pk-f').value || 80;
  const tc   = +document.getElementById('pk-c').value || 250;
  const meals = +document.getElementById('pk-meals').value || 5;
  const modeEl = document.querySelector('input[name="pk-mode"]:checked');
  pickerMode = modeEl ? modeEl.value : 'day';

  if (pickerMode === 'day') runPickerDay(kcal, tp, tf, tc, meals);
  else runPickerList(kcal, tp, tf, tc);
}

// ── Пулы продуктов по времени суток ──────────────────────────────────────────
// Каждый приём имеет whitelist ID из базы + fallback по категориям
// Логика: завтрак = яйца/творог/овсянка/гречка, не мясо и не рыба на завтрак
// Перекус = лёгкое: фрукт, кефир, творог, орехи — не крупы, не мясо
// Обед = главный: мясо/рыба + крупа + овощи
// Ужин = белок + овощи, минимум углеводов, не тяжёлые крупы
// Поздний = только казеин/творог

const MEAL_RULES = {
  breakfast: {
    label: 'Завтрак',
    icon: '🌅',
    pPct: .25, fPct: .25, cPct: .30,
    // белок: яйца и молочка (не мясо!)
    protIds: [30,31,32,1,2,7,3,4],          // яйца, творог, йогурт, курт
    protCats: ['egg','dairy'],
    // углеводы: каши — овсянка, гречка, не рис, не макароны
    carbIds: [36,33,39],                     // овсянка, гречка, булгур
    carbCats: ['grain'],
    carbFilter: d => d.cat==='grain' && ['овсянка','гречка','булгур','перловка'].some(n=>d.n.toLowerCase().includes(n)),
    // жиры: орехи, масло (немного), авокадо
    fatIds: [62,63,64,65,66,67,68,69,70,71,72],  // все орехи, семена, масла
    fatCats: ['nut','fat'],
    fatFilter: d => (d.cat==='nut' && d.f>20) || d.cat==='fat',
    vegs: [],
    note: 'Белок + медленные углеводы + полезные жиры',
  },
  snack1: {
    label: 'Перекус 1',
    icon: '🍎',
    pPct: .10, fPct: .08, cPct: .12,
    protIds: [1,2,5,6,7],                    // творог, кефир, айран, йогурт
    protCats: ['dairy'],
    carbIds: [54,55,56,57,58],               // яблоко, банан, арбуз, дыня, абрикос
    carbCats: ['fruit'],
    carbFilter: d => d.cat==='fruit' && d.k < 100,
    fatIds: [63,64,66],                      // миндаль, арахис, семена тыквы
    fatCats: ['nut'],
    fatFilter: d => d.cat==='nut',
    vegs: [],
    note: 'Лёгкий перекус — молочка + фрукт',
  },
  lunch: {
    label: 'Обед',
    icon: '🍽️',
    pPct: .33, fPct: .30, cPct: .33,
    // белок: мясо или рыба — главный приём
    protIds: [14,15,16,17,18,13,21,22,23,24,25],
    protCats: ['meat','fish'],
    protFilter: d => (d.cat==='meat'||d.cat==='fish') && d.p >= 15,
    // углеводы: рис, гречка, картофель, макароны, нут
    carbIds: [33,34,35,37,38,41,42],
    carbCats: ['grain','legume'],
    carbFilter: d => (d.cat==='grain'||d.cat==='legume') && d.c >= 15,
    // овощи обязательно
    fatIds: [69,70],
    fatCats: ['fat'],
    fatFilter: d => d.cat==='fat',
    vegs: [44,45,46,47,48,49,51,52,53], // брокколи, огурец, помидор, перец, морковь
    vegFilter: d => d.cat==='veg',
    note: 'Мясо/рыба + крупа + свежие овощи',
  },
  snack2: {
    label: 'Перекус 2',
    icon: '⚡',
    pPct: .10, fPct: .07, cPct: .12,
    // предтренировочный: быстрые углеводы + немного белка
    protIds: [86,30,15],                     // батончик, яйцо, курица
    protCats: ['snack','egg'],
    carbIds: [55,54,81,59],                  // банан, яблоко, мёд, курага
    carbCats: ['fruit'],
    carbFilter: d => d.cat==='fruit' || d.id===81, // мёд как исключение
    fatIds: [],
    fatCats: [],
    fatFilter: d => false, // жиры до тренировки минимум
    vegs: [],
    note: 'Перед тренировкой: быстрые углеводы + белок',
  },
  dinner: {
    label: 'Ужин',
    icon: '🌙',
    pPct: .27, fPct: .30, cPct: .18,
    // белок: рыба приоритет вечером, или куриная грудка
    protIds: [15,17,21,22,23,24,25,26,27,28,29],
    protCats: ['fish','meat'],
    protFilter: d => (d.cat==='fish'||(d.cat==='meat'&&d.f<10)) && d.p >= 15,
    // углеводы: немного — только овощные или лёгкий гарнир
    carbIds: [40,42,37],                     // чечевица, маш, картофель (немного)
    carbCats: ['legume'],
    carbFilter: d => d.cat==='legume' || (d.cat==='grain'&&d.c<20),
    // овощи — обязательно и много
    fatIds: [69,70],
    fatCats: ['fat'],
    fatFilter: d => d.cat==='fat',
    vegs: [44,46,47,48,49,50,51,52,53],
    vegFilter: d => d.cat==='veg',
    note: 'Рыба/птица + овощи — минимум углеводов',
  },
  late: {
    label: 'Поздний перекус',
    icon: '🌛',
    pPct: .05, fPct: .08, cPct: .05,
    // только казеин-содержащие продукты
    protIds: [2,1,5,6,3],                    // творог 0%, творог 5%, кефир, айран
    protCats: ['dairy'],
    protFilter: d => d.cat==='dairy' && d.p >= 3,
    carbIds: [],
    carbCats: [],
    carbFilter: d => false,
    fatIds: [],
    fatCats: ['dairy'],
    fatFilter: d => false,
    vegs: [],
    note: 'Казеин — медленный белок на ночь',
  },
};

const MEAL_SEQUENCES = {
  4: ['breakfast','lunch','snack1','dinner'],
  5: ['breakfast','snack1','lunch','snack2','dinner'],
  6: ['breakfast','snack1','lunch','snack2','dinner','late'],
};

const catColors = {meat:'#ff8c42',fish:'#4ed68a',dairy:'#5aabff',egg:'#e8b84b',grain:'#c99a36',legume:'#7ec44a',veg:'#52d68a',fruit:'#ff6b9d',nut:'#a86e3a',snack:'#9b59b6',fat:'#e8d44b',other:'#888'};

function pickFromRule(rule, slot, targetG, seed, mealKey, rowIdx) {
  let pool = [];
  const excluded = excludedCats;

  if (slot === 'prot') {
    // Category filter first (includes custom products), then ID whitelist as fallback
    if (rule.protFilter) {
      pool = DB.filter(d => rule.protFilter(d) && !excluded.has(d.cat));
    } else if (rule.protCats) {
      pool = DB.filter(d => rule.protCats.includes(d.cat) && !excluded.has(d.cat));
    }
    // If still empty, try ID whitelist
    if (!pool.length && rule.protIds) {
      pool = DB.filter(d => rule.protIds.includes(d.id) && !excluded.has(d.cat));
    }
  } else if (slot === 'carb') {
    if (rule.carbFilter) {
      pool = DB.filter(d => rule.carbFilter(d) && !excluded.has(d.cat));
    } else if (rule.carbCats && rule.carbCats.length) {
      pool = DB.filter(d => rule.carbCats.includes(d.cat) && !excluded.has(d.cat));
    }
    if (!pool.length && rule.carbIds && rule.carbIds.length) {
      pool = DB.filter(d => rule.carbIds.includes(d.id));
    }
  } else if (slot === 'fat') {
    if (rule.fatFilter) {
      pool = DB.filter(d => rule.fatFilter(d) && !excluded.has(d.cat));
    } else if (rule.fatCats && rule.fatCats.length) {
      pool = DB.filter(d => rule.fatCats.includes(d.cat) && !excluded.has(d.cat));
    }
    // Always fallback to full nut+fat category for variety
    if (!pool.length) {
      pool = DB.filter(d => (d.cat==='nut' || d.cat==='fat') && !excluded.has(d.cat));
    }
  } else if (slot === 'veg') {
    if (rule.vegFilter) {
      pool = DB.filter(d => rule.vegFilter(d) && !excluded.has(d.cat));
    } else {
      pool = DB.filter(d => d.cat==='veg' && !excluded.has(d.cat));
    }
  }

  if (!pool.length) return null;

  const slotKey = mealKey + '_' + rowIdx;
  const clicks = slotClicks[slotKey] || 0;
  const baseIdx = Math.floor(Math.abs(Math.sin(seed * 9301 + 49297)) * pool.length);
  const idx = (baseIdx + clicks) % pool.length;
  return pool[idx];
}

function gramsForMacro(food, macroG, macroKey) {
  // how many grams of food to get macroG grams of that macro
  const per100 = food[macroKey] || 0;
  if (per100 <= 0) return 100;
  const g = Math.round(macroG / per100 * 100);
  return Math.max(50, Math.min(g, 500));
}

function buildMealBlock(mealKey, mealDef, tp, tf, tc, mealIdx) {
  const mP = Math.round(tp * mealDef.pPct);
  const mF = Math.round(tf * mealDef.fPct);
  const mC = Math.round(tc * mealDef.cPct);
  const baseSeed = pickerSeed + mealIdx * 17;
  const slotSeed = (slot) => slotSeeds[mealKey+'_'+slot] || (baseSeed + slot * 3);

  const rows = [];
  const usedIds = new Set();

  function pickRow(role, slotIdx, targetG, macroKey, fixedG) {
    const slotKey = mealKey+'_'+slotIdx;
    const pin = pinnedSlots[slotKey];
    let food = pin && pin.foodId ? DB.find(d=>d.id===pin.foodId)||null : null;
    if (!food) food = pickFromRule(mealDef, role, targetG, slotSeed(slotIdx), mealKey, slotIdx);
    if (!food || usedIds.has(food.id)) return;
    usedIds.add(food.id);
    let g = pin && pin.customG ? pin.customG : (fixedG || gramsForMacro(food, targetG, macroKey));
    const m = g/100;
    rows.push({food, g, role, si:slotIdx, p:food.p*m, fat:food.f*m, c:food.c*m, k:food.k*m, pinned:!!(pin&&pin.foodId)});
  }

  pickRow('prot', 0, mP, 'p', 0);
  if (mC>10 && mealDef.carbCats && mealDef.carbCats.length) pickRow('carb', 1, mC, 'c', 0);
  if (mealDef.vegs&&mealDef.vegs.length||mealDef.vegFilter) {
    pickRow('veg', 2, 0, null, 150);
    if (mealKey==='lunch'||mealKey==='dinner') pickRow('veg', 3, 0, null, 100);
  }
  if (mF>5 && mealDef.fatIds && mealDef.fatIds.length) {
    const slotKey=mealKey+'_4'; const pin=pinnedSlots[slotKey];
    let ff=pin&&pin.foodId?DB.find(d=>d.id===pin.foodId)||null:null;
    if(!ff)ff=pickFromRule(mealDef,'fat',mF,slotSeed(4),mealKey,4);
    if(ff&&!usedIds.has(ff.id)){
      usedIds.add(ff.id);
      const g=pin&&pin.customG?pin.customG:(ff.cat==='fat'?15:25);
      const m=g/100;
      rows.push({food:ff,g,role:'fat',si:4,p:ff.p*m,fat:ff.f*m,c:ff.c*m,k:ff.k*m,pinned:!!(pin&&pin.foodId)});
    }
  }

  const sumK=rows.reduce((s,r)=>s+r.k,0);
  const sumP=rows.reduce((s,r)=>s+r.p,0);
  const sumF2=rows.reduce((s,r)=>s+r.fat,0);
  const sumC=rows.reduce((s,r)=>s+r.c,0);
  const roleLabel={prot:'Б',carb:'У',fat:'Ж',veg:'О'};

  return {
    html:`<div class="meal-block">
      <div class="mb-head">
        <span class="mb-title">${mealDef.icon} ${mealDef.label}</span>
        <span style="display:flex;gap:10px;font-size:11px;align-items:center;">
          <span class="macro-p">${Math.round(sumP)}г Б</span>
          <span class="macro-f">${Math.round(sumF2)}г Ж</span>
          <span class="macro-c">${Math.round(sumC)}г У</span>
          <span class="mb-kcal">${Math.round(sumK)} ккал</span>
        </span>
      </div>
      <div style="padding:5px 14px 4px;font-size:11px;color:var(--text3);border-bottom:1px solid var(--border);">${mealDef.note}</div>
      ${rows.map(r=>`<div class="food-row">
        <div class="food-cat-dot" style="background:${catColors[r.food.cat]||'#888'};"></div>
        <span class="food-name" style="cursor:pointer;" onclick="openSwapModal('${mealKey}',${r.si},${mealIdx},'${r.role}')" title="Нажми чтобы сменить продукт">
          ${r.food.n}<span class="pin-dot${r.pinned?' on':''}"></span>
        </span>
        <input class="gram-inp" type="number" value="${Math.round(r.g)}" min="10" max="2000"
          onchange="updateGram('${mealKey}',${r.si},this.value)"
          title="Граммовка (редактируй)">
        <span style="font-size:10px;color:var(--text3);">г</span>
        <span class="food-macros">
          <span class="macro-p">${Math.round(r.p)}г</span>
          <span class="macro-f">${Math.round(r.fat)}г</span>
          <span class="macro-c">${Math.round(r.c)}г</span>
          <span class="macro-k">${Math.round(r.k)}</span>
        </span>
        <button class="food-repl" onclick="replaceSlot('${mealKey}',${r.si},${mealIdx})" title="Случайная замена">↻</button>
      </div>`).join('')}
    </div>`,
    sumK, sumP, sumF2, sumC
  };
}

function replaceSlot(mealKey, rowIdx, mealIdx) {
  const slotKey = mealKey + '_' + rowIdx;
  // Clear food pin but keep gram override
  if (pinnedSlots[slotKey]) { pinnedSlots[slotKey].foodId = null; }
  slotClicks[slotKey] = (slotClicks[slotKey] || 0) + 1;
  slotSeeds[slotKey] = pickerSeed + mealIdx * 17 + slotClicks[slotKey] * 137.508;
  runPickerDayKeepState();
}

function runPickerDay(kcal, tp, tf, tc, meals) {
  const el = document.getElementById('picker-result');
  const seq = MEAL_SEQUENCES[meals] || MEAL_SEQUENCES[5];

  let totalP=0,totalF=0,totalC=0,totalK=0;
  const blocks = seq.map((mealKey, idx) => {
    const def = MEAL_RULES[mealKey];
    const result = buildMealBlock(mealKey, def, tp, tf, tc, idx);
    totalP+=result.sumP; totalF+=result.sumF2; totalC+=result.sumC; totalK+=result.sumK;
    return result.html;
  });

  const kPct = Math.min(Math.round(totalK/kcal*100),150);
  const pPct = Math.min(Math.round(totalP/tp*100),150);
  const fPct = Math.min(Math.round(totalF/tf*100),150);
  const cPct = Math.min(Math.round(totalC/tc*100),150);
  const pColor = pPct>=90&&pPct<=110?'var(--green)':pPct<90?'var(--red)':'var(--accent)';
  const cColor = cPct>=90&&cPct<=110?'var(--green)':cPct<90?'var(--red)':'var(--accent)';

  el.innerHTML = `
    <div class="totals-bar">
      <div style="font-size:11px;font-weight:700;color:var(--text3);letter-spacing:.06em;text-transform:uppercase;">Итого за день</div>
      ${[
        {lbl:'Ккал',val:Math.round(totalK),target:document.getElementById('pk-kcal').value,pct:kPct,color:'var(--text)'},
        {lbl:'Белок',val:Math.round(totalP)+'г',target:tp+'г',pct:pPct,color:'var(--blue)'},
        {lbl:'Жиры',val:Math.round(totalF)+'г',target:tf+'г',pct:fPct,color:'var(--green)'},
        {lbl:'Углеводы',val:Math.round(totalC)+'г',target:tc+'г',pct:cPct,color:'var(--accent)'},
      ].map(x=>`<div class="tb-item">
        <div class="tb-val" style="color:${x.color}">${x.val}</div>
        <div class="tb-lbl">${x.lbl} из ${x.target} (${x.pct}%)</div>
      </div>`).join('')}
      <button class="btn btn-sm" onclick="shufflePicker()" style="margin-left:auto;font-size:12px;">🔀 Другой вариант</button>
    </div>
    ${blocks.join('')}`;
}

function runPickerList(kcal, tp, tf, tc) {
  const el = document.getElementById('picker-result');

  // Pick 2 protein sources (meat/fish + dairy/egg), 2 carb sources, 1 fat, 2-3 vegs
  const seededPick = (pool, n, offset) => {
    const shuffled = [...pool].sort((a,b) => seededRand(pickerSeed+offset+a.id) - seededRand(pickerSeed+offset+b.id));
    return shuffled.slice(0,n);
  };

  // Pools include ALL DB entries (including custom) that match category + basic criteria
  const protPool = DB.filter(d => d.p>=12 && ['meat','fish'].includes(d.cat) && !excludedCats.has(d.cat));
  const dairyPool = DB.filter(d => d.p>=8 && d.cat==='dairy' && !excludedCats.has(d.cat));
  const carbPool  = DB.filter(d => d.c>=12 && d.f<10 && ['grain','legume'].includes(d.cat) && !excludedCats.has(d.cat));
  const vegPool   = DB.filter(d => d.cat==='veg' && d.k<80);
  const fatPool   = DB.filter(d => (d.cat==='fat'||d.cat==='nut') && !excludedCats.has(d.cat));

  const protFoods  = seededPick(protPool, 1, 0);
  const dairyFoods = seededPick(dairyPool, 1, 5);
  const carbFoods  = seededPick(carbPool, 2, 10);
  const vegFoods   = seededPick(vegPool, 3, 20);
  const fatFoods   = seededPick(fatPool, 1, 30);

  const groups = [
    {label:'Белок (мясо/рыба)', foods: protFoods, targetMacro: tp*0.6, key:'p'},
    {label:'Белок (молочка)',   foods: dairyFoods, targetMacro: tp*0.4, key:'p'},
    {label:'Углеводы',         foods: carbFoods,  targetMacro: tc, key:'c'},
    {label:'Овощи',            foods: vegFoods,   targetMacro: 0, key:null, fixedG:150},
    {label:'Жиры',             foods: fatFoods,   targetMacro: 0, key:null, fixedG:15},
  ];

  const rows = [];
  groups.forEach(gr => {
    if (!gr.foods.length) return;
    const perFood = gr.targetMacro / gr.foods.length;
    gr.foods.forEach(food => {
      let g;
      if (gr.fixedG) {
        g = gr.fixedG;
      } else {
        const per100 = food[gr.key] || 0;
        g = per100 > 0 ? Math.round(perFood / per100 * 100) : 100;
        g = Math.max(50, Math.min(g, 500));
      }
      const m = g/100;
      rows.push({food, g, groupLabel: gr.label, p:food.p*m, fat:food.f*m, c:food.c*m, k:food.k*m});
    });
  });

  const totK=rows.reduce((s,r)=>s+r.k,0);
  const totP=rows.reduce((s,r)=>s+r.p,0);
  const totF=rows.reduce((s,r)=>s+r.fat,0);
  const totC=rows.reduce((s,r)=>s+r.c,0);

  const pOk = Math.abs(totP-tp)/tp < 0.2;
  const cOk = Math.abs(totC-tc)/tc < 0.25;

  el.innerHTML = `
    <div class="totals-bar">
      <div style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;margin-right:8px;">Итого на день</div>
      <div class="tb-item"><div class="tb-val">${Math.round(totK)}</div><div class="tb-lbl">ккал из ${kcal}</div></div>
      <div class="tb-item"><div class="tb-val" style="color:${pOk?'var(--green)':'var(--accent)'}">${Math.round(totP)}г</div><div class="tb-lbl">белок из ${tp}г</div></div>
      <div class="tb-item"><div class="tb-val" style="color:var(--green)">${Math.round(totF)}г</div><div class="tb-lbl">жиры из ${tf}г</div></div>
      <div class="tb-item"><div class="tb-val" style="color:${cOk?'var(--green)':'var(--accent)'}">${Math.round(totC)}г</div><div class="tb-lbl">углеводы из ${tc}г</div></div>
      <button class="btn btn-sm" onclick="shufflePicker()" style="margin-left:auto;">🔀 Другой</button>
    </div>
    <div class="meal-block">
      <div class="mb-head">
        <span class="mb-title">📋 Список продуктов с граммовкой на день</span>
        <span style="font-size:11px;color:var(--text3);">распредели по приёмам сам</span>
      </div>
      ${rows.map(r=>`<div class="food-row">
        <div class="food-cat-dot" style="background:${catColors[r.food.cat]||'#888'};"></div>
        <div style="flex:1;min-width:0;">
          <div class="food-name">${r.food.n}</div>
          <div style="font-size:10px;color:var(--text3);">${r.groupLabel}</div>
        </div>
        <span class="food-g" style="font-weight:800;color:var(--accent);font-size:14px;">${Math.round(r.g)} г</span>
        <span class="food-macros">
          <span class="macro-p">${Math.round(r.p)}Б</span>
          <span class="macro-f">${Math.round(r.fat)}Ж</span>
          <span class="macro-c">${Math.round(r.c)}У</span>
          <span class="macro-k">${Math.round(r.k)}к</span>
        </span>
      </div>`).join('')}
    </div>`;
}

// replaceFood replaced by replaceSlot above


// ── SWAP MODAL ────────────────────────────────────────────────────────────────
function openSwapModal(mealKey, rowIdx, mealIdx, role) {
  const rule = MEAL_RULES[mealKey];
  if (!rule) return;
  let pool = [];
  if (role==='prot') {
    if (rule.protFilter) pool=DB.filter(d=>rule.protFilter(d));
    else if (rule.protCats) pool=DB.filter(d=>rule.protCats.includes(d.cat));
    if (!pool.length&&rule.protIds) pool=DB.filter(d=>rule.protIds.includes(d.id));
  } else if (role==='carb') {
    if (rule.carbFilter) pool=DB.filter(d=>rule.carbFilter(d));
    else if (rule.carbCats&&rule.carbCats.length) pool=DB.filter(d=>rule.carbCats.includes(d.cat));
    if (!pool.length&&rule.carbIds&&rule.carbIds.length) pool=DB.filter(d=>rule.carbIds.includes(d.id));
    if (!pool.length) pool=DB.filter(d=>['grain','legume','fruit'].includes(d.cat));
  } else if (role==='fat') {
    if (rule.fatFilter) pool=DB.filter(d=>rule.fatFilter(d));
    if (!pool.length) pool=DB.filter(d=>d.cat==='nut'||d.cat==='fat');
  } else if (role==='veg') {
    pool=DB.filter(d=>d.cat==='veg');
  }
  if (!pool.length) { toast('Нет продуктов для этой роли','err'); return; }

  swapCtx={mealKey,rowIdx,mealIdx,role};
  swapPool=pool;
  const pin=pinnedSlots[mealKey+'_'+rowIdx];
  const pinnedId=pin?pin.foodId:null;
  const roleNames={prot:'Белок',carb:'Углеводы',fat:'Жиры',veg:'Овощи'};
  document.getElementById('swap-modal-title').textContent=`Сменить продукт — ${roleNames[role]||role}`;
  document.getElementById('swap-search-inp').value='';
  renderSwapList(pool, pinnedId);
  document.getElementById('swap-modal-bg').classList.add('open');
}

function renderSwapList(pool, pinnedId) {
  document.getElementById('swap-list').innerHTML = pool.map(food=>`
    <div class="swap-item${food.id===pinnedId?' sel':''}" onclick="confirmSwap(${food.id})">
      <div class="food-cat-dot" style="background:${catColors[food.cat]||'#888'};flex-shrink:0;margin-top:3px;"></div>
      <div style="flex:1;min-width:0;">
        <div class="swap-item-name">${food.n}</div>
        <div class="swap-item-macros">
          <span class="macro-p">${food.p}г Б</span>
          <span class="macro-f">${food.f}г Ж</span>
          <span class="macro-c">${food.c}г У</span>
          <span class="macro-k" style="color:var(--text3)">${food.k}кк/100г</span>
        </div>
        ${food.note?`<div class="swap-item-sub">${food.note}</div>`:''}
      </div>
      ${food.id===pinnedId?'<span style="color:var(--accent);font-size:12px;">✓</span>':''}
    </div>`).join('');
}

function filterSwapList() {
  const q=document.getElementById('swap-search-inp').value.toLowerCase();
  const filtered=q?swapPool.filter(f=>f.n.toLowerCase().includes(q)||(f.note||'').toLowerCase().includes(q)):swapPool;
  const pin=swapCtx?pinnedSlots[swapCtx.mealKey+'_'+swapCtx.rowIdx]:null;
  renderSwapList(filtered, pin?pin.foodId:null);
}

function confirmSwap(foodId) {
  if (!swapCtx) return;
  const {mealKey, rowIdx} = swapCtx;
  const slotKey=mealKey+'_'+rowIdx;
  const existing=pinnedSlots[slotKey]||{};
  pinnedSlots[slotKey]={foodId, customG:existing.customG||null};
  closeSwapModal();
  runPickerDayKeepState();
}

function closeSwapModal() {
  document.getElementById('swap-modal-bg').classList.remove('open');
  swapCtx=null; swapPool=[];
}

function updateGram(mealKey, rowIdx, newG) {
  const g=Math.round(parseFloat(newG));
  if (!g||g<5||g>2000) return;
  const k=mealKey+'_'+rowIdx;
  pinnedSlots[k]={...(pinnedSlots[k]||{}), customG:g};
  runPickerDayKeepState();
}

// ── WEIGHT TRACKER ────────────────────────────────────────────────────────────
let weightLog=[];

function loadWeightLog(){try{weightLog=JSON.parse(localStorage.getItem('nb_weight')||'[]');}catch(e){weightLog=[];}}
function saveWeightLog(){localStorage.setItem('nb_weight',JSON.stringify(weightLog));}

function loadWpSettings(){
  try{
    const s=JSON.parse(localStorage.getItem('nb_wp')||'{}');
    if(s.height){const el=document.getElementById('w-height');if(el)el.value=s.height;}
    if(s.goal){const el=document.getElementById('w-goal');if(el)el.value=s.goal;}
  }catch(e){}
}
function saveWpSettings(){
  const h=document.getElementById('w-height').value;
  const g=document.getElementById('w-goal').value;
  localStorage.setItem('nb_wp',JSON.stringify({height:h,goal:g}));
  renderWeightPage();
}

function addWeight(){
  const d=document.getElementById('w-date').value;
  const kg=parseFloat(document.getElementById('w-kg').value);
  const waist=parseFloat(document.getElementById('w-waist').value)||null;
  if(!d||!kg||kg<20||kg>400){toast('Введите корректные данные','err');return;}
  const i=weightLog.findIndex(e=>e.date===d);
  if(i!==-1)weightLog.splice(i,1);
  weightLog.push({date:d,kg,...(waist?{waist}:{})});
  weightLog.sort((a,b)=>a.date.localeCompare(b.date));
  saveWeightLog();
  document.getElementById('w-kg').value='';
  document.getElementById('w-waist').value='';
  renderWeightPage();
  toast('Вес записан');
}

function deleteWeight(idx){
  weightLog.splice(idx,1);
  saveWeightLog();
  renderWeightPage();
}

// BMI helpers
function calcBMI(kg,hCm){if(!kg||!hCm)return null;return kg/((hCm/100)**2);}
function bmiCat(bmi){
  if(bmi<16)return{label:'Истощение',c:'#5aabff',bg:'rgba(90,171,255,.18)'};
  if(bmi<18.5)return{label:'Дефицит',c:'#7dd3fc',bg:'rgba(125,211,252,.18)'};
  if(bmi<25)return{label:'Норма',c:'#4ed68a',bg:'rgba(78,214,138,.18)'};
  if(bmi<30)return{label:'Избыт. вес',c:'#e8b84b',bg:'rgba(232,184,75,.18)'};
  if(bmi<35)return{label:'Ожирение I',c:'#ff8c42',bg:'rgba(255,140,66,.18)'};
  return{label:'Ожирение II',c:'#ff6b6b',bg:'rgba(255,107,107,.18)'};
}

function drawBmiBar(bmi){
  if(!bmi)return'<div style="height:10px;background:var(--bg4);border-radius:5px;"></div>';
  const W=260,H=22,minB=14,maxB=40;
  const zones=[
    {from:14,to:16,c:'#5aabff'},{from:16,to:18.5,c:'#7dd3fc'},
    {from:18.5,to:25,c:'#4ed68a'},{from:25,to:30,c:'#e8b84b'},
    {from:30,to:35,c:'#ff8c42'},{from:35,to:40,c:'#ff6b6b'}
  ];
  const xS=v=>Math.min(W,Math.max(0,(v-minB)/(maxB-minB)*W));
  const bars=zones.map(z=>`<rect x="${xS(z.from).toFixed(1)}" y="7" width="${Math.max(0,xS(z.to)-xS(z.from)).toFixed(1)}" height="8" fill="${z.c}" opacity=".75"/>`).join('');
  const mx=Math.min(W-2,Math.max(2,xS(Math.max(minB,Math.min(maxB,bmi)))));
  return`<svg viewBox="0 0 ${W} ${H}" style="width:100%;display:block;overflow:visible">
    <rect x="0" y="7" width="${W}" height="8" rx="4" fill="var(--bg4)"/>
    <clipPath id="bmiclip"><rect x="0" y="7" width="${W}" height="8" rx="4"/></clipPath>
    <g clip-path="url(#bmiclip)">${bars}</g>
    <polygon points="${mx},2 ${mx-5},${H} ${mx+5},${H}" fill="white" opacity=".95"/>
    <line x1="${mx}" y1="0" x2="${mx}" y2="${H}" stroke="white" stroke-width="1.5" opacity=".6"/>
  </svg>`;
}

function drawGoalArc(pct){
  const r=44,cx=58,cy=58,sw=9,pl=Math.PI*r;
  const filled=Math.min(1,Math.max(0,pct))*pl;
  const pathD=`M${cx-r},${cy} A${r},${r} 0 0,1 ${cx+r},${cy}`;
  const color=pct>=1?'var(--green)':pct>=0.5?'var(--accent)':'var(--blue)';
  return`<svg width="116" height="66" viewBox="0 0 116 66">
    <path d="${pathD}" fill="none" stroke="var(--bg4)" stroke-width="${sw}" stroke-linecap="round"/>
    <path d="${pathD}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"
      stroke-dasharray="${filled.toFixed(1)} ${pl.toFixed(1)}"/>
    <text x="${cx}" y="${cy-4}" text-anchor="middle" fill="var(--text)" font-size="17" font-weight="900" font-family="Arial Black,Impact,sans-serif">${Math.round(pct*100)}%</text>
  </svg>`;
}

function drawSparkline(entries){
  if(entries.length<2)return`<div style="width:90px;height:42px;background:var(--bg3);border-radius:6px;"></div>`;
  const W=90,H=42,p=5;
  const kgs=entries.map(e=>e.kg);
  const mn=Math.min(...kgs)-0.3,mx=Math.max(...kgs)+0.3;
  const xS=i=>p+(i/(entries.length-1))*(W-p*2);
  const yS=kg=>p+(1-(kg-mn)/(mx-mn))*(H-p*2);
  const pts=entries.map((e,i)=>`${xS(i).toFixed(1)},${yS(e.kg).toFixed(1)}`);
  const isDown=entries[entries.length-1].kg<=entries[0].kg;
  const col=isDown?'#4ed68a':'#ff6b6b';
  const area=`M${xS(0).toFixed(1)},${H}L${pts.join('L')}L${xS(entries.length-1).toFixed(1)},${H}Z`;
  return`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${col}" stop-opacity=".3"/>
      <stop offset="100%" stop-color="${col}" stop-opacity="0"/>
    </linearGradient></defs>
    <path d="${area}" fill="url(#sg)"/>
    <path d="M${pts.join('L')}" fill="none" stroke="${col}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${xS(entries.length-1).toFixed(1)}" cy="${yS(entries[entries.length-1].kg).toFixed(1)}" r="3.5" fill="${col}" stroke="var(--bg2)" stroke-width="1.5"/>
  </svg>`;
}

function renderWeightPage(){
  const goalKg=parseFloat(document.getElementById('w-goal')?.value)||0;
  const heightCm=parseFloat(document.getElementById('w-height')?.value)||0;
  const s=[...weightLog].sort((a,b)=>a.date.localeCompare(b.date));
  const n=s.length;
  const set=(id,txt)=>{const el=document.getElementById(id);if(el)el.textContent=txt;};
  const setC=(id,c)=>{const el=document.getElementById(id);if(el)el.style.color=c;};

  // Hero: current weight
  const curr=n?s[n-1]:null;
  set('wp-curr-big',curr?curr.kg.toFixed(1):'—');
  set('wp-last-date',curr?curr.date:'нет данных');

  // BMI
  const bmi=curr?calcBMI(curr.kg,heightCm):null;
  const bmiEl=document.getElementById('wp-bmi-badge');
  if(bmi&&bmiEl){
    const cat=bmiCat(bmi);
    bmiEl.textContent=cat.label;
    bmiEl.style.cssText=`display:inline-block;background:${cat.bg};color:${cat.c};`;
  } else if(bmiEl) bmiEl.style.display='none';
  document.getElementById('wp-bmi-bar').innerHTML=drawBmiBar(bmi);
  set('wp-bmi-num',bmi?bmi.toFixed(1):'—');
  set('wp-bmi-cat',bmi?bmiCat(bmi).label:'Введите рост');
  if(bmi)document.getElementById('wp-bmi-cat').style.color=bmiCat(bmi).c;

  // Delta from last
  if(n>=2){
    const d=s[n-1].kg-s[n-2].kg;
    set('wp-delta-last',(d>=0?'+':'')+d.toFixed(2)+' кг');
    setC('wp-delta-last',d<0?'var(--green)':d>0?'var(--red)':'var(--text2)');
  } else set('wp-delta-last','—');

  // Best in 30 days
  const d30=new Date(Date.now()-30*86400000).toISOString().slice(0,10);
  const last30=s.filter(e=>e.date>=d30);
  const best30=last30.length?Math.min(...last30.map(e=>e.kg)):null;
  set('wp-best30',best30?best30.toFixed(1)+' кг':'—');

  // Waist
  const lastWaist=[...s].reverse().find(e=>e.waist);
  const waistRow=document.getElementById('wp-waist-row');
  if(waistRow){waistRow.style.display=lastWaist?'block':'none';}
  set('wp-waist-val',lastWaist?lastWaist.waist+' см':'—');

  // Trend (last 7 days)
  const last7=s.slice(-Math.min(7,n));
  document.getElementById('wp-sparkline').innerHTML=drawSparkline(last7);
  if(last7.length>=2){
    const td=last7[last7.length-1].kg-last7[0].kg;
    set('wp-trend-val',(td>=0?'+':'')+td.toFixed(2)+' кг');
    setC('wp-trend-val',td<0?'var(--green)':td>0?'var(--red)':'var(--text2)');
    const days=Math.max(1,(new Date(last7[last7.length-1].date)-new Date(last7[0].date))/86400000);
    set('wp-trend-sub',`${last7[0].date.slice(5)} — ${last7[last7.length-1].date.slice(5)}`);
  } else { set('wp-trend-val','—'); set('wp-trend-sub','Меньше 2 записей'); }

  // Goal arc
  const goalArcEl=document.getElementById('wp-goal-arc');
  if(goalKg&&n&&s[0].kg!==goalKg){
    const startKg=s[0].kg;
    const totalDiff=startKg-goalKg;
    const doneDiff=startKg-curr.kg;
    const pct=totalDiff!==0?Math.max(0,doneDiff/totalDiff):0;
    if(goalArcEl)goalArcEl.innerHTML=drawGoalArc(pct);
    const remain=curr.kg-goalKg;
    set('wp-goal-delta',(remain>=0?'−':'+')+(Math.abs(remain)).toFixed(1)+' кг');
    setC('wp-goal-delta',Math.abs(remain)<1?'var(--green)':'var(--text)');
    set('wp-goal-sub',`до цели ${goalKg} кг`);
    // ETA
    if(n>=3){
      const rec=s.slice(-Math.min(7,n));
      const rate=(rec[rec.length-1].kg-rec[0].kg)/Math.max(1,(new Date(rec[rec.length-1].date)-new Date(rec[0].date))/86400000);
      if(Math.abs(rate)>0.01){
        const daysLeft=Math.abs(remain/rate);
        const eta=new Date(Date.now()+daysLeft*86400000);
        set('wp-goal-eta','Ориентировочно: '+eta.toLocaleDateString('ru-RU'));
      }
    }
  } else {
    if(goalArcEl)goalArcEl.innerHTML=drawGoalArc(0);
    set('wp-goal-delta','—'); set('wp-goal-sub','Цель не задана'); set('wp-goal-eta','');
  }

  // Chart
  document.getElementById('w-chart-area').innerHTML=drawWeightChart(s,goalKg);

  // History
  const hist=document.getElementById('w-history-body');
  if(!n){hist.innerHTML='<div class="w-empty">Добавьте первую запись веса</div>';return;}
  hist.innerHTML=[...s].reverse().map((e,ri)=>{
    const realIdx=s.length-1-ri;
    const prev=realIdx>0?s[realIdx-1].kg:null;
    const delta=prev!==null?e.kg-prev:null;
    const ds=delta===null?'':(delta>=0?'+':'')+delta.toFixed(1);
    const dc=delta===null?'':delta<0?'var(--green)':delta>0?'var(--red)':'var(--text2)';
    const waistStr=e.waist?`<span style="font-size:11px;color:var(--text3);margin-left:6px;">👤${e.waist}см</span>`:'';
    return`<div class="w-hist-row">
      <span class="w-hist-date">${e.date}</span>
      <span class="w-hist-val">${e.kg.toFixed(1)} кг${waistStr}</span>
      <span class="w-hist-delta" style="color:${dc}">${ds}</span>
      <button class="w-hist-del" onclick="deleteWeight(${realIdx})" title="Удалить">✕</button>
    </div>`;
  }).join('');
}

function drawWeightChart(entries, goalKg){
  if(entries.length<2)return`<div style="padding:32px;text-align:center;color:var(--text3);font-size:13px;">Добавьте минимум 2 записи для графика</div>`;
  const W=600,H=220,pL=48,pR=24,pT=14,pB=32;
  const cW=W-pL-pR, cH=H-pT-pB;
  const kgs=entries.map(e=>e.kg);
  const allVals=[...kgs,goalKg||Infinity].filter(v=>isFinite(v));
  let minK=Math.floor(Math.min(...allVals)-1), maxK=Math.ceil(Math.max(...allVals)+1);
  if(maxK-minK<3){minK-=1;maxK+=1;}
  const kRange=maxK-minK||1;
  const xS=i=>pL+(i/(entries.length-1))*cW;
  const yS=kg=>pT+(1-(kg-minK)/kRange)*cH;

  // Grid & ticks
  const ticks=5;
  let grid='',yLabels='';
  for(let i=0;i<ticks;i++){
    const kg=minK+(kRange*i/(ticks-1));
    const y=yS(kg).toFixed(1);
    grid+=`<line x1="${pL}" y1="${y}" x2="${W-pR}" y2="${y}" stroke="#2e2e2e" stroke-width="1"/>`;
    yLabels+=`<text x="${pL-5}" y="${(parseFloat(y)+4).toFixed(1)}" text-anchor="end" fill="#555" font-size="10">${kg.toFixed(1)}</text>`;
  }

  // X labels
  const xIdxs=[0];
  if(entries.length>4)xIdxs.push(Math.floor(entries.length/2));
  xIdxs.push(entries.length-1);
  let xLabels='';
  [...new Set(xIdxs)].forEach(i=>{
    xLabels+=`<text x="${xS(i).toFixed(1)}" y="${H-4}" text-anchor="middle" fill="#555" font-size="10">${entries[i].date.slice(5).replace('-','/')}</text>`;
  });

  // Main line + area
  const pts=entries.map((e,i)=>`${xS(i).toFixed(1)},${yS(e.kg).toFixed(1)}`);
  const line='M'+pts.join('L');
  const area=`M${xS(0).toFixed(1)},${(pT+cH).toFixed(1)}L${pts.join('L')}L${xS(entries.length-1).toFixed(1)},${(pT+cH).toFixed(1)}Z`;

  // Trend (EMA smoothing)
  let ema=entries[0].kg, alpha=0.4;
  const trend=entries.map((e,i)=>{ema=i===0?e.kg:alpha*e.kg+(1-alpha)*ema;return ema;});
  const trendPts=trend.map((kg,i)=>`${xS(i).toFixed(1)},${yS(kg).toFixed(1)}`);
  const trendLine='M'+trendPts.join('L');

  // Dots
  const dots=entries.map((e,i)=>{
    const r=i===entries.length-1?5:3.5;
    const fill=i===entries.length-1?'#e8b84b':'#c99a36';
    return `<circle cx="${xS(i).toFixed(1)}" cy="${yS(e.kg).toFixed(1)}" r="${r}" fill="${fill}" stroke="#1a1a1a" stroke-width="${i===entries.length-1?2:1.5}"/>`;
  }).join('');

  // Goal line
  const goalSvg=goalKg?`<line x1="${pL}" y1="${yS(goalKg).toFixed(1)}" x2="${W-pR}" y2="${yS(goalKg).toFixed(1)}" stroke="#4ed68a" stroke-width="1.5" stroke-dasharray="5,4" opacity=".75"/>
    <text x="${W-pR-4}" y="${(yS(goalKg)-5).toFixed(1)}" text-anchor="end" fill="#4ed68a" font-size="10">цель ${goalKg}кг</text>`:'';

  return`<svg viewBox="0 0 ${W} ${H}" class="w-chart-svg" style="overflow:visible">
    <defs>
      <linearGradient id="wgrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e8b84b" stop-opacity=".22"/>
        <stop offset="100%" stop-color="#e8b84b" stop-opacity="0"/>
      </linearGradient>
    </defs>
    ${grid}${yLabels}${xLabels}
    ${goalSvg}
    <path d="${area}" fill="url(#wgrad)"/>
    <path d="${line}" fill="none" stroke="#e8b84b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${trendLine}" fill="none" stroke="#5aabff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity=".65"/>
    ${dots}
  </svg>`;
}

loadDB();loadDiary();loadGoals();buildCatFilters();buildCatSelects();renderDB();tdeeCalc();renderDiary();
buildSchedule();loadProfiles();buildExcludeButtons();loadWeightLog();loadWpSettings();renderDash();
(()=>{const el=document.getElementById('w-date');if(el)el.value=new Date().toISOString().slice(0,10);})();

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}
// закрывать сайдбар при выборе пункта меню на мобиле
document.querySelectorAll('.nav-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{if(window.innerWidth<=640)closeSidebar();});
});

// ── DASHBOARD ────────────────────────────────────────────────────────────────
const GOALS_KEY = 'nb_goals';
let dashGoals = {kcal:2000, prot:150, fat:65, carb:250};

function loadGoals() {
  try { const s=localStorage.getItem(GOALS_KEY); if(s) dashGoals=JSON.parse(s); } catch(e){}
}

function saveGoals() {
  const k=parseInt(document.getElementById('g-kcal').value)||2000;
  const p=parseInt(document.getElementById('g-prot').value)||150;
  const f=parseInt(document.getElementById('g-fat').value)||65;
  const c=parseInt(document.getElementById('g-carb').value)||250;
  dashGoals={kcal:k,prot:p,fat:f,carb:c};
  localStorage.setItem(GOALS_KEY, JSON.stringify(dashGoals));
  document.getElementById('dash-goals-form').style.display='none';
  document.getElementById('goals-btn').textContent='⚙ Цели';
  renderDash();
  toast('Цели сохранены', 'ok');
}

function toggleGoalsForm() {
  const f=document.getElementById('dash-goals-form');
  const open=f.style.display!=='none'&&f.style.display!=='';
  if(open){
    f.style.display='none';
    document.getElementById('goals-btn').textContent='⚙ Цели';
  } else {
    document.getElementById('g-kcal').value=dashGoals.kcal;
    document.getElementById('g-prot').value=dashGoals.prot;
    document.getElementById('g-fat').value=dashGoals.fat;
    document.getElementById('g-carb').value=dashGoals.carb;
    f.style.display='block';
    document.getElementById('goals-btn').textContent='✕ Закрыть';
  }
}

function applyGoalPreset(type) {
  const presets={
    cut:{kcal:1600,prot:160,fat:55,carb:140},
    keep:{kcal:2000,prot:150,fat:65,carb:220},
    bulk:{kcal:2600,prot:170,fat:80,carb:320}
  };
  const p=presets[type];if(!p)return;
  document.getElementById('g-kcal').value=p.kcal;
  document.getElementById('g-prot').value=p.prot;
  document.getElementById('g-fat').value=p.fat;
  document.getElementById('g-carb').value=p.carb;
}

function applyGoalFromTDEE() {
  const tdeeEl=document.getElementById('tdee-result');
  const val=tdeeEl?parseInt(tdeeEl.textContent):0;
  if(!val){toast('Сначала рассчитай TDEE','err');return;}
  document.getElementById('g-kcal').value=val;
  document.getElementById('g-prot').value=Math.round(val*0.3/4);
  document.getElementById('g-fat').value=Math.round(val*0.25/9);
  document.getElementById('g-carb').value=Math.round(val*0.45/4);
}

function updateRing(id, val, goal, circ) {
  const el=document.getElementById(id);if(!el)return;
  const pct=goal>0?Math.min(val/goal,1):0;
  el.style.strokeDashoffset=circ*(1-pct);
}

function renderDash() {
  // Greeting
  const h=new Date().getHours();
  const greet=h<12?'Доброе утро':h<18?'Добрый день':h<22?'Добрый вечер':'Спокойной ночи';
  const gEl=document.getElementById('dash-greeting');if(gEl)gEl.textContent=greet;
  const dEl=document.getElementById('dash-date');
  if(dEl){
    dEl.textContent=new Date().toLocaleDateString('ru-RU',{weekday:'long',day:'numeric',month:'long'});
  }

  // Today's diary totals
  const today=new Date().toISOString().slice(0,10);
  const todayEntries=(diary||[]).filter(e=>(e.ts||'').startsWith(today));
  const totK=todayEntries.reduce((s,e)=>s+(e.k||0),0);
  const totP=todayEntries.reduce((s,e)=>s+(e.p||0),0);
  const totF=todayEntries.reduce((s,e)=>s+(e.f||0),0);
  const totC=todayEntries.reduce((s,e)=>s+(e.c||0),0);

  // Update main kcal ring (circ = 2π*58 ≈ 364)
  const kEl=document.getElementById('dash-k-val');if(kEl)kEl.textContent=Math.round(totK);
  const kgEl=document.getElementById('dash-k-goal');if(kgEl)kgEl.textContent='/ '+dashGoals.kcal;
  updateRing('rk',totK,dashGoals.kcal,364);

  // Remain
  const rem=dashGoals.kcal-Math.round(totK);
  const remEl=document.getElementById('dash-remain');
  if(remEl) remEl.textContent=rem>0?`Остаток: ${rem} ккал`:(rem<0?`Превышение: ${Math.abs(rem)} ккал`:'Цель выполнена ✓');

  // Macro rings (circ = 2π*32 ≈ 201)
  const rpEl=document.getElementById('rp-val');if(rpEl)rpEl.textContent=Math.round(totP)+'г';
  const rfEl=document.getElementById('rf-val');if(rfEl)rfEl.textContent=Math.round(totF)+'г';
  const rcEl=document.getElementById('rc-val');if(rcEl)rcEl.textContent=Math.round(totC)+'г';
  updateRing('rp',totP,dashGoals.prot,201);
  updateRing('rf',totF,dashGoals.fat,201);
  updateRing('rc',totC,dashGoals.carb,201);

  const rpGEl=document.getElementById('rp-goal');if(rpGEl)rpGEl.textContent='/ '+dashGoals.prot+'г';
  const rfGEl=document.getElementById('rf-goal');if(rfGEl)rfGEl.textContent='/ '+dashGoals.fat+'г';
  const rcGEl=document.getElementById('rc-goal');if(rcGEl)rcGEl.textContent='/ '+dashGoals.carb+'г';

  // Meal breakdown — group by 'meal' tag or just show last 4 entries
  const mealsEl=document.getElementById('dash-meals');
  if(mealsEl && todayEntries.length>0){
    const last=todayEntries.slice(-4).reverse();
    mealsEl.innerHTML=last.map(e=>`
      <div class="dash-meal-row">
        <div class="dash-meal-name">${escHtml(e.n||'')} ${e.g?e.g+'г':''}</div>
        <div class="dash-meal-kcal">${e.k||0} ккал</div>
      </div>`).join('');
  } else if(mealsEl){
    mealsEl.innerHTML='<div style="font-size:12px;color:var(--text3);text-align:center;padding:10px 0;">Дневник пуст — добавь первый приём пищи</div>';
  }
}

// ── BARCODE SCANNER ──────────────────────────────────────────────────────────
let scanner = null;
let scannerRunning = false;

function _stopScanner() {
  return new Promise(resolve => {
    const s = scanner;
    scanner = null;
    scannerRunning = false;
    if (!s) { resolve(); return; }
    try {
      s.stop().then(resolve).catch(resolve);
    } catch(e) { resolve(); }
  });
}

// Recreate the viewport div so html5-qrcode always mounts on a fresh element
function _resetViewport() {
  const wrap = document.querySelector('.scan-viewport-wrap');
  const old = document.getElementById('scan-viewport');
  if (old) old.remove();
  const div = document.createElement('div');
  div.id = 'scan-viewport';
  // Insert before the scan-line div
  const line = wrap.querySelector('.scan-line');
  wrap.insertBefore(div, line || null);
}

function startScannerCamera(cameraId) {
  document.getElementById('scan-hint').textContent = 'Наведи камеру на штрихкод продукта';
  try {
    scanner = new Html5Qrcode('scan-viewport');
    const cfg = { fps: 10, qrbox: { width: 260, height: 120 }, aspectRatio: 1.5 };
    scanner.start(
      cameraId,
      cfg,
      (barcode) => onBarcodeScan(barcode),
      () => {}
    ).then(() => { scannerRunning = true; })
     .catch(err => {
       console.warn('Scanner start err:', err);
       document.getElementById('scan-hint').textContent = 'Нет доступа к камере';
     });
  } catch(e) {
    console.error('Html5Qrcode init error:', e);
    document.getElementById('scan-hint').textContent = 'Камера недоступна';
  }
}

async function openScanner() {
  document.getElementById('scan-overlay').classList.add('open');
  document.getElementById('scan-result').style.display = 'none';
  document.getElementById('scan-hint').textContent = 'Запрос камеры…';

  await _stopScanner();
  _resetViewport();

  try {
    // getCameras() triggers fresh getUserMedia — fixes iOS reuse bug
    const cameras = await Html5Qrcode.getCameras();
    if (!cameras || cameras.length === 0) {
      document.getElementById('scan-hint').textContent = 'Камера не найдена';
      return;
    }
    // Prefer back/rear camera
    const cam = cameras.find(c => /back|rear|environment/i.test(c.label))
             || cameras[cameras.length - 1];
    startScannerCamera(cam.id);
  } catch(e) {
    console.warn('getCameras error:', e);
    // Fallback: try with facingMode if getCameras fails
    try {
      scanner = new Html5Qrcode('scan-viewport');
      const cfg = { fps: 10, qrbox: { width: 260, height: 120 }, aspectRatio: 1.5 };
      scanner.start({ facingMode: 'environment' }, cfg,
        (b) => onBarcodeScan(b), () => {}
      ).then(() => { scannerRunning = true; document.getElementById('scan-hint').textContent = 'Наведи камеру на штрихкод продукта'; })
       .catch(() => { document.getElementById('scan-hint').textContent = 'Нет доступа к камере'; });
    } catch(e2) {
      document.getElementById('scan-hint').textContent = 'Нет доступа к камере';
    }
  }
}

async function closeScanner() {
  document.getElementById('scan-overlay').classList.remove('open');
  await _stopScanner();
  _resetViewport();
}

function onBarcodeScan(barcode) {
  if (!scannerRunning) return;
  scannerRunning = false;
  const s = scanner;
  scanner = null;
  if (s) try { s.stop().catch(() => {}); } catch(e) {}
  document.getElementById('scan-hint').textContent = '🔍 Ищу продукт…';
  document.getElementById('scan-result').style.display = 'none';

  fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then(r => r.json())
    .then(data => {
      if (data.status === 1 && data.product) {
        showScanResult(data.product, barcode);
      } else {
        document.getElementById('scan-hint').textContent = '❌ Продукт не найден в базе';
        resumeScanner();
      }
    })
    .catch(() => {
      document.getElementById('scan-hint').textContent = '⚠ Ошибка сети, попробуй ещё раз';
      resumeScanner();
    });
}

async function resumeScanner() {
  document.getElementById('scan-result').style.display = 'none';
  await _stopScanner();
  _resetViewport();
  try {
    const cameras = await Html5Qrcode.getCameras();
    const cam = cameras.find(c => /back|rear|environment/i.test(c.label))
             || cameras[cameras.length - 1];
    startScannerCamera(cam.id);
  } catch(e) {
    startScannerCamera({ facingMode: 'environment' });
  }
}

function showScanResult(p, barcode) {
  const name  = p.product_name || p.product_name_ru || p.generic_name || 'Неизвестный продукт';
  const brand = p.brands || '';
  const img   = p.image_front_small_url || p.image_url || '';
  const n100  = p.nutriments || {};
  const k = Math.round(n100['energy-kcal_100g'] || n100['energy-kcal'] || (n100['energy_100g'] || 0) / 4.184 || 0);
  const pr= +(n100['proteins_100g'] || n100['protein_100g'] || 0).toFixed(1);
  const f = +(n100['fat_100g'] || 0).toFixed(1);
  const c = +(n100['carbohydrates_100g'] || n100['carbs_100g'] || 0).toFixed(1);

  // Map OFF category to our CATS key
  const offCat = (p.categories_tags || []).join(' ').toLowerCase();
  let cat = 'other';
  if (/dairy|milk|cheese|yogurt|kefir/.test(offCat)) cat = 'dairy';
  else if (/meat|chicken|beef|pork|lamb/.test(offCat)) cat = 'meat';
  else if (/fish|seafood|tuna|salmon/.test(offCat)) cat = 'fish';
  else if (/egg/.test(offCat)) cat = 'egg';
  else if (/cereal|grain|rice|pasta|bread|oat|wheat/.test(offCat)) cat = 'grain';
  else if (/legume|bean|lentil|chickpea/.test(offCat)) cat = 'legume';
  else if (/vegetable|veg/.test(offCat)) cat = 'veg';
  else if (/fruit|berry/.test(offCat)) cat = 'fruit';
  else if (/nut|seed/.test(offCat)) cat = 'nut';
  else if (/fat|oil|butter/.test(offCat)) cat = 'fat';
  else if (/sweet|candy|chocolate|sugar/.test(offCat)) cat = 'sweet';
  else if (/sauce|spice|condiment/.test(offCat)) cat = 'sauce';
  else if (/snack|chip|cracker|sport/.test(offCat)) cat = 'snack';
  else if (/fast.food|burger|pizza/.test(offCat)) cat = 'fast';
  else if (/beverage|drink|juice|water|cola/.test(offCat)) cat = 'drink';

  const imgHtml = img
    ? `<img class="scan-img" src="${img}" alt="" onerror="this.style.display='none'">`
    : `<div class="scan-img" style="display:flex;align-items:center;justify-content:center;color:var(--text3);font-size:22px;">🏷</div>`;

  const macroHtml = `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px;">
    <span style="font-size:12px;color:var(--text2)">🔥 <b style="color:var(--accent)">${k}</b> ккал</span>
    <span style="font-size:12px;color:var(--text2)">Б <b>${pr}г</b></span>
    <span style="font-size:12px;color:var(--text2)">Ж <b>${f}г</b></span>
    <span style="font-size:12px;color:var(--text2)">У <b>${c}г</b></span>
    <span style="font-size:11px;color:var(--text3)">на 100г</span>
  </div>`;

  const result = document.getElementById('scan-result');
  result.innerHTML = `
    <div class="scan-product">
      ${imgHtml}
      <div style="flex:1;min-width:0;">
        <div class="scan-pname">${escHtml(name)}</div>
        ${brand ? `<div class="scan-brand">${escHtml(brand)}</div>` : ''}
        ${macroHtml}
      </div>
    </div>
    <div class="scan-actions">
      <button class="btn-primary" style="flex:1;padding:9px 6px;font-size:13px;"
        onclick="scanAddToDB('${escAttr(name)}','${cat}',${k},${pr},${f},${c})">
        + В базу
      </button>
      <button class="btn-outline" style="flex:1;padding:9px 6px;font-size:13px;"
        onclick="scanAddToDiary('${escAttr(name)}',${k},${pr},${f},${c})">
        + В дневник
      </button>
    </div>
    <div style="text-align:center;margin-top:8px;">
      <button onclick="resumeScannerUI()" style="background:none;border:none;color:var(--accent);font-size:12px;cursor:pointer;">Сканировать ещё</button>
    </div>`;
  result.style.display = 'block';
  document.getElementById('scan-hint').textContent = '✓ Продукт найден';
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(s) {
  return String(s).replace(/'/g,"\\'").replace(/"/g,'&quot;');
}

function resumeScannerUI() {
  document.getElementById('scan-result').style.display = 'none';
  document.getElementById('scan-hint').textContent = 'Наведи камеру на штрихкод продукта';
  resumeScanner();
}

function scanAddToDB(name, cat, k, p, f, c) {
  const existing = DB.find(d => d.n.toLowerCase() === name.toLowerCase());
  if (existing) { toast('Уже есть в базе: ' + existing.n); return; }
  const item = { id: nextId(), n: name, cat, k, p, f, c, note: 'Штрихкод', custom: true };
  DB.push(item);
  saveDB();
  toast('Добавлено в базу: ' + name, 'ok');
  if (typeof scheduleSync === 'function') scheduleSync();
  closeScanner();
}

function scanAddToDiary(name, k, p, f, c) {
  const g = parseInt(prompt(`Граммы для "${name}":`, '100') || '0');
  if (!g || g <= 0) return;
  const factor = g / 100;
  const entry = {
    id: Date.now(),
    n: name,
    g,
    k: Math.round(k * factor),
    p: +(p * factor).toFixed(1),
    f: +(f * factor).toFixed(1),
    c: +(c * factor).toFixed(1),
    ts: new Date().toISOString()
  };
  diary.push(entry);
  saveDiary();
  toast(`${name} ${g}г → дневник`, 'ok');
  if (typeof scheduleSync === 'function') scheduleSync();
  closeScanner();
  showPage('plan', document.querySelector('.nav-btn[onclick*="plan"]'));
}
