function Emiter (){ //funcion constructora
    this.events={} //objeto vacio 
}

//on permite llenar de funcionalidad o push
Emiter.prototype.on= function(type, listener){ //"A LA FUNCION CONSTRUCOTRA EMMITER LE VOY A GRAGR UN NUEBO METODO LLAMADO ON"
    this.events[type]=this.events[type] || [];
    this.events[type].push(listener);
}

Emiter.prototype.emit=function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        })
    }
}

module.exports=Emiter;
//invocar la funcionalidad