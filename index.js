class Anticrash {
    constructor(process){
        if(!process) throw new TypeError(`[Anticrash] : process must be renseigned`);
        this.process = process;
        this.start();
    }

    async start(){
        this.process.on('uncaughtException', (err, origin) => { return });
        this.process.on('unhandledRejection', (err, promise) => { return });
        this.process.on('uncaughtExceptionMonitor', (err, origin) => { return });
        this.process.on('multipleResolves', (type, pomise) => { return });
    }

}

exports.Anticrash = Anticrash
