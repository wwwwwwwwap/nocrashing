class Anticrash {
    constructor(logging, process){
        if(!logging) logging = false;
        if(typeof logging !== 'boolean') throw new TypeError(`[Anticrash] : logging must be a boolean`);
        if(!process) throw new TypeError(`[Anticrash] : process must be renseigned`);
        this.logging = logging;
        this.process = process;
        this.start();
    }

    async start(){
        console.log(`[Anticrash] : Started`);

        this.process.on('uncaughtException', (reason, p) => {
            return;
        });

        this.process.on('uncaughtExceptionMonitor', (reason, p) => {
            return
        });

        this.process.on('unhandledRejection', (reason, p)=>{
            if(!this.logging) return;
            let getNow = () => { return { time: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }) } };
            console.log(`${getNow().time} | [Anticrash] :`);
            console.log(p);
            return console.log(reason);
        })

    }

}

exports.Anticrash = Anticrash
