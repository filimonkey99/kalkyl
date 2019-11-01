class App extends Domer {




    _egetKap = ''
    _collectedEgetKap = []
    _egetKapSum = 0

    _skulder = ''
    _collectedSkulder = []
    _skulderSum = 0;


    _utbetal = ''
    _collectedUtbetal = []
    _utbetalSum = 0;

    _inbetal = ''
    _collectedInbetal = []
    _inbetalSum = 0;


    _inkomst = ''
    _collectedInkomst = []
    _inkomstSum = 0;

    _utgift = ''
    _collectedUtgift = []
    _utgiftSum = 0;

    _intäkt = ''
    _collectedIntäkt = []
    _intäktSum = 0;

    _kostnad = ''
    _collectedKostnad = []
    _kostnadSum = 0;



    _cashFlow = this._inbetalSum - this._utbetalSum;
    _omsett = this._inbetalSum + this._inkomstSum + this._intäktSum;
    _TTB = this._intäktSum - this._kostnadSum;
    _TG = this._TTB / this._kostnadSum;
    _resultat = this._inkomstSum - this._utgiftSum;
    _rörelseMarginal = (this._resultat + this._intäktSum) / this._omsett;
    _kapital = this._egetKapSum + this._skulderSum;
    _KOH = this._omsett / this._kapital;
    _räntabilitet = (this._resultat + this._intäktSum) / this._kapital;



    _isCalcStart = false;


    constructor() {
        super();
        this.bokslut = new Bokslut(this);
        this.reset();
    }
    reset() {
        this._isCalcStart = false;

        this._calcStart = new calcStart(this);
    }
    onAddTransactionClick() {


        this._calcStart.addUbetalning(new Transaction(this._utbetal));

        this._calcStart.addInbetalning(new Transaction(this._inbetal));

        this._calcStart.addIntäkt(new Transaction(this._intäkt));

        this._calcStart.addInkomst(new Transaction(this._inkomst));

        this._calcStart.addUtgift(new Transaction(this._utgift));

        this._calcStart.addKostnad(new Transaction(this._kostnad));

        this._calcStart.addEgetKap(new Transaction(this._egetKap));

        this._calcStart.addSkulder(new Transaction(this._skulder));

        this._calcStart.addCashFlow(new Transaction(this._cashFlow));

    }

    onClearClick() {
        this._egetKap = ''
        this._collectedEgetKap = []
        this._egetKapSum = 0

        this._skulder = ''
        this._collectedSkulder = []
        this._skulderSum = 0;

        this._utbetal = ''
        this._collectedUtbetal = []
        this._utbetalSum = 0;

        this._inbetal = ''
        this._collectedInbetal = []
        this._inbetalSum = 0;

        this._inkomst = ''
        this._collectedInkomst = []
        this._inkomstSum = 0;

        this._utgift = ''
        this._collectedUtgift = []
        this._utgiftSum = 0;

        this._intäkt = ''
        this._collectedIntäkt = []
        this._intäktSum = 0;

        this._kostnad = ''
        this._collectedKostnad = []
        this._kostnadSum = 0;

    this._cashFlow = 0
    this._omsett = 0
    this._TTB = 0
    this._TG = 0
    this._resultat =0
    this._rörelseMarginal=0
    this._kapital =0 
    this._KOH = 0
    this._räntabilitet = 0 


    }

    onInbetalClick() {
        this._inbetalSum = 0;
        this._isCalcStart = true;
        this._collectedInbetal.push(parseInt(this._inbetal));
        for (let i = 0; i < this._collectedInbetal.length; i++) {
            this._inbetalSum += this._collectedInbetal[i]
        }
    }

    onUtbetalClick() {
        this._utbetalSum = 0;
        this._isCalcStart = true;
        this._collectedUtbetal.push(parseInt(this._utbetal));
        for (let i = 0; i < this._collectedUtbetal.length; i++) {
            this._utbetalSum += this._collectedUtbetal[i]
        }
    }
    onInkomstClick() {
        this._inkomstSum = 0;
        this._isCalcStart = true;
        this._collectedInkomst.push(parseInt(this._inkomst));
        for (let i = 0; i < this._collectedInkomst.length; i++) {
            this._inkomstSum += this._collectedInkomst[i]
        }
    }
    onUtgiftClick() {
        this._utgiftSum = 0;
        this._isCalcStart = true;
        this._collectedUtgift.push(parseInt(this._utgift));
        for (let i = 0; i < this._collectedUtgift.length; i++) {
            this._utgiftSum += this._collectedUtgift[i]
        }

    }
    onIntäktClick() {
        this._intäktSum = 0;
        this._isCalcStart = true;
        this._collectedIntäkt.push(parseInt(this._intäkt));
        for (let i = 0; i < this._collectedIntäkt.length; i++) {
            this._intäktSum += this._collectedIntäkt[i]
        }
    }
    onKostnadClick() {
        this._kostnadSum = 0;
        this._isCalcStart = true;
        this._collectedKostnad.push(parseInt(this._kostnad));
        for (let i = 0; i < this._collectedKostnad.length; i++) {
            this._kostnadSum += this._collectedKostnad[i]
        }
    }

    onEgetKapClick() {
        this._egetKapSum = 0;
        this._isCalcStart = true;
        this._collectedEgetKap.push(parseInt(this._egetKap));
        for (let i = 0; i < this._collectedEgetKap.length; i++) {
            this._egetKapSum += this._collectedEgetKap[i]
        }
    }
    onSkulderClick() {
        this._skulderSum = 0;
        this._isCalcStart = true;
        this._collectedSkulder.push(parseInt(this._skulder));
        for (let i = 0; i < this._collectedSkulder.length; i++) {
            this._skulderSum += this._collectedSkulder[i]
        }
    }

    onBokslutClick() {


        this._isCalcStart = true;
        this._cashFlow = this._inbetalSum - this._utbetalSum;
        this._omsett = this._inbetalSum + this._inkomstSum + this._intäktSum;
        this._TTB = this._intäktSum - this._kostnadSum;
        this._TG = this._TTB / this._kostnadSum;
        this._resultat = this._inkomstSum - this._utgiftSum;
        this._rörelseMarginal = (this._resultat + this._intäktSum) / this._omsett;
        this._kapital = this._egetKapSum + this._skulderSum;
        this._KOH = this._omsett / this._kapital;
        this._räntabilitet = (this._resultat + this._intäktSum) / this._kapital;

    }


    getAddTransaction(html) {


        return html`
            <h3>Välj Månad</h3>
            <select name="Månad" id="month">
            <option value="Jan">Januari</option>
            <option value="Feb">Februari</option>
            <option value="Mar">Mars</option>
            <option value="Apr">April</option>
            <option value="Maj">Maj</option>
            <option value="Jun">Juni</option>
            <option value="Jul">Juli</option>
            <option value="Aug">Augusti</option>
            <option value="Sep">September</option>
            <option value="Okt">Oktober</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option> 
        </select>
        <br>
<br>
<br>
<br>


            <input style ="color:black;" type= "text" bind="_inbetal" placeholder="Skriv in inbetalningen"> 
            <button click ="onInbetalClick" type="button" > Lägg Till Ny Inbetlning </button>
            
            <input style ="color:black;" type= "text" bind="_utbetal" placeholder="Skriv in utbetalningen"> 
            <button click ="onUtbetalClick" type="button" > Lägg Till Ny Utbetlning </button>

            <br>
            <br>
            <br>
            <br>

            <input style ="color:black;" type= "text" bind="_intäkt" placeholder="Skriv in intäckten"> 
            <button click ="onIntäktClick" type="button" > Lägg Till Ny Intäckt </button>
            
            <input style ="color:black;" type= "text" bind="_kostnad" placeholder="Skriv in Kostnaden"> 
            <button click ="onKostnadClick" type="button" > Lägg Till Ny Kostnad </button>
            <br>
            <br>
            <br>
            <br>
            <input style ="color:black;" type= "text" bind="_inkomst" placeholder="Skriv in inkomsten"> 
            <button click ="onInkomstClick" type="button" > Lägg Till Ny Inkomst </button>
            
            <input style ="color:black;" type= "text" bind="_utgift" placeholder="Skriv in utgiften"> 
            <button click ="onUtgiftClick" type="button" > Lägg Till Ny Utgift </button>
            <br>
            <br>
            <br>
            <br>
          
            <input style ="color:black;" type= "text" bind="_skulder" placeholder="Skriv in skulder"> 
            <button click ="onSkulderClick" type="button" > Lägg Till Ny skuld </button>
            
            <input style ="color:black;" type= "text" bind="_egetKap" placeholder="Skriv in eget kapital"> 
            <button click ="onEgetKapClick" type="button" > Lägg Till eget kapital </button>

            <button click ="onBokslutClick" type="button" > Bokslut </button>
            <br>
            <br>
          <button click="onClearClick" type="button"> Clear </button>

            `

    }



    render(html) {

        return html`
        
        <div>
        <h1> Mossack Fonseca</h1>
        
        ${this.getAddTransaction(html)}
        
        <form>
        ${this.bokslut}
        </form>
        </div>
        `
    }
}


new App();
