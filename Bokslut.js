
class Bokslut extends Domer {

    constructor(app) {
        super()
        this.app = app



        
    }
    
        render(html) {
            return html` 
            
            <form>
            <h1>Transaktioner</h1>
            <h2>Inbetalningar: ${this.app._inbetalSum} kr</h2>
            <h2>Utbetalningar: ${this.app._utbetalSum} kr</h2>
            <h2>Intäckter: ${this.app._intäktSum} kr</h2>
            <h2>Kostnader: ${this.app._kostnadSum} kr</h2>
            <h2>Inkomster: ${this.app._inkomstSum} kr</h2>
            <h2>Utgifter: ${this.app._utgiftSum} kr</h2>
            <br>
            <br>
            <h1>Kalkyleringar</h1>
            <h2>Omsättningen är: ${this.app._omsett} kr  </h2> 
            <h2>Resultat är: ${this.app._resultat} kr</h2>
            <h2>Kassaflödes Analysen visar ${this.app._cashFlow}</h2>
            <h2>Totala Täckningsbigrad är: ${this.app._TTB} </h2>
            <h2>TäckningsGraden är: ${this.app._TG} %</h2>
            <h2>Rörelsemarginalet är: ${this.app._rörelseMarginal} %</h2>
            <h2>Kapital Omsättningens hastighet är: ${this.app._KOH} gånger per år </h2>
            <h2>Räntabilitet: ${this.app._räntabilitet} </h2>
            <h2>Företagets Kapital: ${this.app._kapital} </h2>
            <br>
            <br>
            <h1>Tillgångar</h1>
            <h2>Företagets skulder: ${this.app._skulderSum} </h2>
            <h2>Företagets egna kapital: ${this.app._egetKapSum} </h2>
            
            
            </form>
            
            `
            
        }
            
        
    }