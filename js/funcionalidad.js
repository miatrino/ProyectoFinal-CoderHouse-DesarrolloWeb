class Servicio{
    constructor(id,nombre,precio,tipo){
       this.id=id;
       this.nombre=nombre.toUpperCase();
       this.precio=parseFloat(precio);
       this.tipo=tipo.toUpperCase;
       this.realizado=false;
    }
 
    sumarIva(){
       this.precio=this.precio*1.21;
    }
    realizado(){
       this.realizado=true;
    }
 }
 
 class Turno{
    constructor(idServicio,fecha,hora){
       this.idServicio=idServicio;
       this.fecha=fecha;
       this.hora=hora;
       this.tomado=false;
    }
    turnoTomado(){
       this.tomado=true;
    }
 }
 
 const servicios= [];
 servicios.push(new Servicio("GASFAEGED12","Maquillaje para quinceañeras","1000","25/11/2021","10:30","social"));
 servicios.push(new Servicio("GASFAEGED22","Maquillaje para madrinas","1200","26/11/2021","09:30","social"));
 servicios.push(new Servicio("GASFAEGED34","Maquillaje para novias","1500","27/11/2021","11:30","social"));
 servicios.push(new Servicio("GASFAEGED99","Automaquillaje","700","28/11/2021","11:15","social"));
 servicios.push(new Servicio("GASFAEGED00","Maquillaje para teens","1300","29/11/2021","09:15","social"));
 servicios.push(new Servicio("GASFAEGED23","Maquillaje para hombres","1600","30/11/2021","08:30","social"));
 servicios.push(new Servicio("GASFAEGED67","Maquillaje halo eyes","2000","31/11/2021","10:30","profesional"))
 servicios.push(new Servicio("GASFAEGED21","Maquillaje de noche","2100","01/12/2021","12:30","profesional"))
 servicios.push(new Servicio("GASFAEGED78","Maquillaje de fiesta","2200","02/12/2021","14:30","profesional"))
 servicios.push(new Servicio("GASFAEGED98","Maquillaje teatral","2300","03/12/2021","15:30","profesional"))
 servicios.push(new Servicio("GASFAEGED43","Maquillaje piel blindada","2400","04/12/2021","16:30","profesional"))
 servicios.push(new Servicio("GASFAEGED45","Maquillaje editorial","2500","05/12/2021","17:30","profesional"));
 servicios.push(new Servicio("GASFAEGED57","Maquillaje para niños","1400","06/12/2021","18:30","artistico"));
 servicios.push(new Servicio("GASFAEGED67","Maquillaje para eventos","1500","07/12/2021","10:30","artistico"));
 servicios.push(new Servicio("GASFAEGED89","Maquillaje para fiesta tematica","1700","08/12/2021","09:30","artistico"));
 servicios.push(new Servicio("GASFAEGED03","Maquillaje para Halloween","1800","09/12/2021","11:30","artistico"));
 servicios.push(new Servicio("GASFAEGED06","Maquillaje Body Paint","1900","10/12/2021","12:30","artistico"));
 servicios.push(new Servicio("GASFAEGED09","Maquillaje FX","4000","11/12/2021","13:30","artistico"));
 
 const turnos =[];
 turnos.push(new Turno("GASFAEGED12","25/11/2021","10:30"));
 turnos.push(new Turno("GASFAEGED13","26/11/2021","09:30"));
 turnos.push(new Turno("GASFAEGED14","27/11/2021","11:30"));
 turnos.push(new Turno("GASFAEGED15","28/11/2021","11:15"));
 turnos.push(new Turno("GASFAEGED16","29/11/2021","09:15"));
 turnos.push(new Turno("GASFAEGED17","30/11/2021","08:30"));
 turnos.push(new Turno("GASFAEGED18","31/11/2021","10:30"));
 turnos.push(new Turno("GASFAEGED19","01/12/2021","12:30"));
 turnos.push(new Turno("GASFAEGED20","02/12/2021","14:30"));
 turnos.push(new Turno("GASFAEGED21","03/12/2021","15:30"));
 turnos.push(new Turno("GASFAEGED22","04/12/2021","16:30"));
 turnos.push(new Turno("GASFAEGED23","05/12/2021","17:30"));
 turnos.push(new Turno("GASFAEGED24","06/12/2021","18:30"));
 turnos.push(new Turno("GASFAEGED25","07/12/2021","10:30"));
 turnos.push(new Turno("GASFAEGED26","08/12/2021","09:30"));
 turnos.push(new Turno("GASFAEGED27","09/12/2021","11:30"));
 turnos.push(new Turno("GASFAEGED28","10/12/2021","12:30",));
 turnos.push(new Turno("GASFAEGED29","11/12/2021","13:30"));
 
 
 
 //Ordenar el array de objetos Servicio por id
 
 servicios.sort((a,b)=>{
    const idA=a.id.toUpperCase();
    const idB=b.id.toUpperCase();
    if(a.id<b.id){
       return -1;
    }
    if(a.id>b.id){
       return 1;
    }
    return 0;
 });
 
 
 //Utilizo los métodos de los objetos Servicio y Turno
 for(const servicio of servicios){
    servicio.sumarIva;
    servicio.realizado;
 }
 
 for(const turno of turnos){
    turno.turnoTomado;
 }
 
 //Ingreso por prompt valores de precio Servicio y precio descuento y devuelvo por alert el
 //precio final
 
 const suma = (a,b)=> a+b;
 const resta = (a,b)=> a-b;
 const iva = x=>x*0.21;
 
 let precioServicio;
 let precioDescuento;
 
 do{
   precioServicio=parseFloat(prompt("ingrese precio servicio"));
 
 }while(Number.isNaN(precioServicio)||precioServicio<0);
 
 do{
    precioDescuento = parseFloat(prompt("ingrese precio descuento"));
 }while(Number.isNaN(precioDescuento)||precioDescuento<0);
 
 //Calucular nuevo precio = precioServicio+IVA-precioDescuento
 let nuevoPrecio =resta(suma(precioServicio,iva(precioServicio)),precioDescuento);
 
 alert('Nuevo precio '+nuevoPrecio);