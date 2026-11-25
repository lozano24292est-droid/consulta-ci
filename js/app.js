(function(){
  var DATA = window.ASIGNACIONES || [];
  var form = document.getElementById('form');
  var input = document.getElementById('ci');
  var out = document.getElementById('result');
  document.getElementById('year').textContent = new Date().getFullYear();

  var I = {
    user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
    pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>'
  };

  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function norm(s){return String(s).toUpperCase().replace(/[\s.\-]/g,'')}
  function digits(s){return String(s).replace(/\D/g,'')}

  function find(q){
    var n = norm(q), d = digits(q);
    var exact = DATA.filter(function(r){return norm(r.ci)===n});
    if(exact.length) return exact;
    if(n===d) return DATA.filter(function(r){return digits(r.ci)===d});
    return [];
  }

  function item(icon,label,val,sub,full){
    if(!val) return '';
    return '<div class="item'+(full?' full':'')+'"><div class="ico">'+icon+'</div><div><small>'+label+'</small><b>'+esc(val)+'</b>'+(sub?'<span class="sub">'+esc(sub)+'</span>':'')+'</div></div>';
  }

  function card(r){
    return '<article class="card res"><div class="res__head"><small>Persona asignada</small><strong>'+esc(r.nombre||'—')+'</strong></div><div class="res__body">'+
      item(I.user,'C.I.',r.ci)+
      item(I.cal,'Fecha',r.fecha)+
      item(I.pin,'Recinto',r.recinto,r.direccion,true)+
      item(I.clock,'Turno',r.turno)+
      item(I.clock,'Horario',r.horario)+
    '</div></article>';
  }

  function msg(cls,t,p){out.innerHTML='<div class="card msg '+cls+'"><h2>'+t+'</h2><p>'+p+'</p></div>'}

  input.addEventListener('input',function(){input.value=input.value.replace(/[^0-9a-zA-Z\-\s]/g,'')});

  form.addEventListener('submit',function(e){
    e.preventDefault();
    var q = input.value.trim();
    if(digits(q).length<5){msg('msg--warn','Ingrese un C.I. válido','Escriba su número de cédula de identidad (mínimo 5 dígitos).');return}
    var rs = find(q);
    if(!rs.length){msg('msg--err','No se encontró el C.I. '+esc(q),'Verifique el número ingresado. Si el problema continúa, comuníquese con la DDEP.');return}
    out.innerHTML = rs.map(card).join('');
    out.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
})();
