"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9471],{611:(e,a,i)=>{i.r(a),i.d(a,{data:()=>l});const l={key:"v-5a7e33b6",path:"/it_IT/restoring-nand.html",title:"Ripristino di un backup della NAND",lang:"it-IT",frontmatter:{title:"Ripristino di un backup della NAND"},excerpt:"",headers:[{level:2,title:"Requisiti",slug:"requisiti",children:[]},{level:2,title:"Fai un dump della BIOS per utilizzarla in no$gba",slug:"fai-un-dump-della-bios-per-utilizzarla-in-no-gba",children:[]},{level:2,title:"Testare il backup della NAND",slug:"testare-il-backup-della-nand",children:[]},{level:2,title:"Disinstallazione di Unlaunch dal backup della tua NAND (facoltativo)",slug:"disinstallazione-di-unlaunch-dal-backup-della-tua-nand-facoltativo",children:[]},{level:2,title:"Flash del backup della NAND (Software)",slug:"flash-del-backup-della-nand-software",children:[]},{level:2,title:"Flash del backup della NAND (Hardmod)",slug:"flash-del-backup-della-nand-hardmod",children:[]}],filePathRelative:"it_IT/restoring-nand.md",git:{updatedTime:1641862111e3}}},8111:(e,a,i)=>{i.r(a),i.d(a,{default:()=>Y});var l=i(6252);const n=(0,l._)("div",{class:"custom-container danger"},[(0,l._)("p",{class:"custom-container-title"},"DANGER"),(0,l._)("p",null,[(0,l.Uk)("ATTENZIONE! Questo processo è "),(0,l._)("em",null,[(0,l._)("strong",null,"potenzialmente pericoloso")]),(0,l.Uk)(". Anche seguendo questi passaggi esattamente vi è ancora il potenziale di brickare il DSi, poiché la sua NAND è di qualità molto bassa, soprattutto se si flasha più volte! Questo procedimento dovrebbe essere usato solo come ultima risorsa!")])],-1),o=(0,l._)("div",{class:"custom-container tip"},[(0,l._)("p",{class:"custom-container-title"},"TIP"),(0,l._)("p",null,[(0,l.Uk)("Non saltare "),(0,l._)("em",null,"niente"),(0,l.Uk)(" in questa pagina, visto che qualsiasi errore aumenta notevolmente le possibilità di brickare il tuo DSI.")])],-1),r=(0,l._)("p",null,"In primo luogo, alcune alternative più sicure per le ragioni che portano al voler fare questo:",-1),t=(0,l._)("li",null,"Installare DSiWare può essere fatto utilizzando hiyaCFW o TWiLight Menu++",-1),s=(0,l.Uk)("Le immagini possono essere recuperate usando "),d={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},u=(0,l.Uk)("ninfs"),c=(0,l.Uk)(", insieme a hiyaCFW o TWiLight Menu++ se le vuoi su console. L'ultima versione di HiyaCFW Helper ti permette di copiare le tue foto dalla NAND alla SDNAND durante la configurazione"),p=(0,l._)("li",null,[(0,l.Uk)("Si può ripristinare la configurazione dei pulsanti di Unlaunch dal menu, a cui è possibile accedere tenendo premuto "),(0,l._)("kbd",{class:"face"},"A"),(0,l.Uk)(" + "),(0,l._)("kbd",{class:"face"},"B"),(0,l.Uk)(" durante l'accensione della console")],-1),h=(0,l._)("li",null,"Avviare Unlaunch risulta in un errore? Estrai la scheda SD e prova a riavviare il sistema. Se funziona, allora è un difetto con la scheda SD e il ripristino di un backup della NAND non risolverà",-1),m=(0,l.Uk)('"Si è verificato un errore..." all\'avvio è un errore di hiyaCFW e non è relativo alla tua NAND, consulta la pagina '),b={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("FAQ e risoluzione dei problemi di hiyaCFW"),v=(0,l.Uk)(" sulla DS-Homebrew Wiki per maggiori informazioni"),g=(0,l.Uk)("Eventuali errori in TWiLight Menu++ non sono correlati e dovresti provare a reinstallare TWiLight Menu++ o chiedere aiuto su "),f={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},N=(0,l.Uk)("Discord"),D=(0,l._)("li",null,'La disinstallazione di Unlaunch, che sia flashando la NAND oppure usando il suo uninstaller, deve essere evitata a meno che non sia assolutamente necessaria, è possibile impostare le autoboot keys su "Launcher" e il tuo DSi sarà come se fosse di fabbrica',-1),S=(0,l._)("p",null,"L'unica cosa che dovresti fare con la tua NAND è installare Unlaunch. Usa le alternative altrimenti.",-1),A=(0,l._)("h2",{id:"requisiti",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),(0,l.Uk)(" Requisiti")],-1),_=(0,l._)("li",null,[(0,l.Uk)("Il tuo backup della NAND "),(0,l._)("strong",null,"dallo stesso DSi")],-1),U=(0,l.Uk)("La versione più recente di "),z={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},E=(0,l.Uk)("MakeForwarder"),w=(0,l._)("li",null,"Un modo per eseguire homebrew con l'accesso alla NAND, come Unlaunch o Memory Pit",-1),q={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},W=(0,l.Uk)("no$gba"),I=(0,l.Uk)(", per controllare il backup della NAND (scarica la versione di gioco di Windows) "),O=(0,l.Uk)("gli utenti macOS e Linux possono usare "),C={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},M=(0,l.Uk)("WINE"),T=(0,l.Uk)(" per avviare no$gba"),L={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},B=(0,l.Uk)("dsibiosdumper"),R=(0,l.uE)('<h2 id="fai-un-dump-della-bios-per-utilizzarla-in-no-gba" tabindex="-1"><a class="header-anchor" href="#fai-un-dump-della-bios-per-utilizzarla-in-no-gba" aria-hidden="true">#</a> Fai un dump della BIOS per utilizzarla in no$gba</h2><ol><li>Estrai <code>dsibiosdumper.nds</code> dall&#39;archivio <code>dsibiosdumper.zip</code> e posizionalo ovunque sulla tua scheda SD</li><li>Accendi la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd><ul><li>Questo dovrebbe avviare il menu di Unlaunch</li></ul></li><li>Avvia dsibiosdumper tramite il menu di Unlaunch</li><li>Premi <kbd class="face">A</kbd> per scaricare la BIOS sulla scheda SD</li><li>Premi <kbd>START</kbd> per uscire da dsibiosdumper</li></ol><h2 id="testare-il-backup-della-nand" tabindex="-1"><a class="header-anchor" href="#testare-il-backup-della-nand" aria-hidden="true">#</a> Testare il backup della NAND</h2><p>È molto importante verificare che il backup della NAND stia funzionando prima di tentare di ripristinarla alla console, visto che se mostra un errore di brick in no$gba allora molto probabilmente brickera pure la tua console.</p><ol><li>Estrai <code>NO$GBA.EXE</code> da <code>no$gba-w.zip</code> in una cartella sul tuo computer</li><li>Copia il tuo backup della NAND nella cartella che hai inserito <code>NO$GBA.EXE</code> e rinominalo in <code>DSI-1.MMC</code></li><li>Copia <code>bios7i.bin</code> e <code>bios9i.bin</code> nella cartella che metti <code>NO$GBA.EXE</code>, rinominati rispettivamente <code>BIOSDSI7.ROM</code> e <code>BIOSDSI9.ROM</code>.</li><li>Avvia <code>NO$GBA.EXE</code></li><li>Clicca su <code>Options</code> &gt; <code>Emulation Setup</code> per aprire la finestra Emulation Setup</li><li>Cambia <code>Reset/Startup Entrypoint</code> in <code>BIOS GBA/NDS (Nintendo logo)</code></li><li>Cambia <code>NDS Mode/Colors</code> in <code>DSi (retail/16MB)</code></li><li>Clicca <code>Salva ora</code></li><li>Avvia qualsiasi ROM Nintendo DS (<code>.nds</code> file)</li></ol><p>Se no$gba carica il menu del DSi (o il menu di Unlaunch), allora continua alla sezione successiva. Se mostra qualsiasi tipo di errore <em><strong>non flashare quel backup</strong></em>!</p><h2 id="disinstallazione-di-unlaunch-dal-backup-della-tua-nand-facoltativo" tabindex="-1"><a class="header-anchor" href="#disinstallazione-di-unlaunch-dal-backup-della-tua-nand-facoltativo" aria-hidden="true">#</a> Disinstallazione di Unlaunch dal backup della tua NAND (facoltativo)</h2><p>Segui questa sezione se hai eseguito il dump del backup della tua NAND dopo aver installato Unlaunch e volessi disinstallarlo dal sistema. Se non vuoi disinstallare Unlaunch, <strong>non</strong> devi seguire questa sezione.</p>',8),F=(0,l.Uk)("Scarica l'ultima versione dell'"),$={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},H=(0,l.Uk)("installer di Unlaunch"),y=(0,l.uE)("<li>Estrai <code>UNLAUNCH.DSI</code> da <code>unlaunch.zip</code></li><li>Avvia <code>UNLAUNCH.DSI</code> su no$gba e avvialo dallo slot delle cartucce di gioco <ul><li>Dovrebbe avviare l&#39;installer di Unlaunch, che assomiglia al menu di Unlaunch</li></ul></li><li>Scegli <code>Disinstalla</code></li><li>Una volta completato, scegli <code>Spegnimento</code></li><li>Avvia qualsiasi ROM Nintendo DS e assicurati che il menu del DSi si avvii e funzioni correttamente</li>",5),x=(0,l.uE)('<h2 id="flash-del-backup-della-nand-software" tabindex="-1"><a class="header-anchor" href="#flash-del-backup-della-nand-software" aria-hidden="true">#</a> Flash del backup della NAND (Software)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Assicurati di aver letto attraverso i passaggi sopra visto che è qui che diventa pericoloso. Se siete stati collegati direttamente qui senza seguire quanto sopra, allora tornate in alto e leggere l&#39;intera pagina.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Assicurati che il tuo sistema Nintendo DSi sia ben caricato prima di iniziare questa sezione.</p></div><ol><li>Con la scheda SD inserita, accendi il tuo Nintendo DSi tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd></li><li>Avvia SafeNANDManager</li><li>Premi il pulsante per <code>avviare il ripristino della NAND</code></li><li>Una volta terminato il ripristino, premi <kbd>START</kbd> per spegnere il tuo DSi</li></ol><p>La tua NAND dovrebbe ora essere ripristinata.</p><h2 id="flash-del-backup-della-nand-hardmod" tabindex="-1"><a class="header-anchor" href="#flash-del-backup-della-nand-hardmod" aria-hidden="true">#</a> Flash del backup della NAND (Hardmod)</h2>',6),G=(0,l.Uk)("Se non riesci ad avviare il tuo Nintendo DSi, un hardmod è l'unico modo per ripristinare un backup NAND. La migliore guida che attualmente esiste è la guida "),P={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"},Q=(0,l.Uk)(" Hardmod Nintendo DSi sulla DS-Homebrew Wiki"),X=(0,l.Uk)("."),Z={},Y=(0,i(3744).Z)(Z,[["render",function(e,a){const i=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,o,r,(0,l._)("ul",null,[t,(0,l._)("li",null,[s,(0,l._)("a",d,[u,(0,l.Wm)(i)]),c]),p,h,(0,l._)("li",null,[m,(0,l._)("a",b,[k,(0,l.Wm)(i)]),v]),(0,l._)("li",null,[g,(0,l._)("a",f,[N,(0,l.Wm)(i)])]),D]),S,A,(0,l._)("ul",null,[_,(0,l._)("li",null,[U,(0,l._)("a",z,[E,(0,l.Wm)(i)])]),w,(0,l._)("li",null,[(0,l._)("a",q,[W,(0,l.Wm)(i)]),I,(0,l._)("ul",null,[(0,l._)("li",null,[O,(0,l._)("a",C,[M,(0,l.Wm)(i)]),T])])]),(0,l._)("li",null,[(0,l._)("a",L,[B,(0,l.Wm)(i)])])]),R,(0,l._)("ol",null,[(0,l._)("li",null,[F,(0,l._)("a",$,[H,(0,l.Wm)(i)])]),y]),x,(0,l._)("p",null,[G,(0,l._)("a",P,[Q,(0,l.Wm)(i)]),X])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,l]of a)i[e]=l;return i}}}]);