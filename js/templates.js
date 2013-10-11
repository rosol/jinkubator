module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html lang="en" ng-app="app">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n    <meta name="viewport" content="width=device-width" initial-scale="2.0">\n    <meta name="description" content="">\n    <meta name="author" content="">\n    <title ng-bind-template="Jinkubator"></title>\n    <link rel="stylesheet" href="css/app.css"><!--[if lte IE 7]>\n    <script src="http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script><![endif]--><!--[if lte IE 8]>\n    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <script>\n      window.brunch = window.brunch || {};\n      window.brunch[\'auto-reload\'] = {\n          enabled: true\n      };\n    </script>\n    <script src="js/vendor.js"></script>\n    <script src="js/app.js"></script>\n  </head>\n  <body ng-controller="AppCtrl">\n    <div class="top-menu">\n      <div class="top-menu-inner"><a href="#/home" class="brand">wjug</a>\n        <div ng-include="\'partials/nav.html\'" class="nav"></div>\n      </div>\n    </div>\n    <div class="wrapper">\n      <div class="main-content">\n        <div ng-switch="subview" class="subview">\n          <div ng-switch-when="loading" ui-animate>\n            <div page="1" class="section">\n              <div class="centered">\n                <div class="container">\n                  <div class="row">\n                    <div class="span12">\n                      <p>loading...</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div ng-switch-when="main_page" ng-include=" \'partials/main_page.html\' " ui-animate></div>\n          <div ng-switch-when="prelegents" ng-include=" \'partials/prelegents.html\' " ui-animate></div>\n          <div ng-switch-when="meeting1" ng-include=" \'partials/meeting/1.html\' " ui-animate></div>\n          <!--{next_meetings}-->\n        </div>\n      </div>\n      <div class="push"></div>\n    </div>\n    <div class="footer">\n      <div ng-include=" \'partials/footer.html\' " class="container"></div>\n    </div>\n  </body>\n</html>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span8"><h1>A First Level Header</h1>\n<h2>A Second Level Header</h2>\n<p>Now is the time for all good men to come to\nthe aid of their country. This is just a\nregular paragraph.</p>\n<p>The quick brown fox jumped over the lazy\ndog&#39;s back.</p>\n<h3>Header 3</h3>\n<blockquote>\n<p>This is a blockquote.</p>\n<p>This is the second paragraph in the blockquote.</p>\n<h2>This is an H2 in a blockquote</h2>\n</blockquote>\n<p>Some of these words <em>are emphasized</em>.\nSome of these words <em>are emphasized also</em>.</p>\n<p>Use two asterisks for <strong>strong emphasis</strong>.\nOr, if you prefer, <strong>use two underscores instead</strong>.</p>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div class="footer-body">\n  <p class="pull-right"><span class="sites-system-link">design & code <b class=\'powered-by\'><a href=\'http://touk.pl\'>touk</a></b></br></span><span class="sites-system-link">photos: <a href=\'http://www.flickr.com/photos/stuckincustoms/2049233526/sizes/l/in/photostream/\'>first</a>, <a href=\'http://www.landscape-photo.net/albums/userpics/10001/Country_road.jpg\'>second</a></span></p>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div ng-controller="PageCtrl">\n  <div id="about" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-about">\n    <div class="centered darkenBox">\n      <div class="container">\n        <div class="row">\n          <div class="span4">\n            <h1>czym jest Jinkubator?</h1>\n            <p>Są to cykliczne spotkania dla początkujących programistów Javy. Odbywają się one<b> w sali 5440 budynku Wydziału MIMUW na ulicy Banacha 2 w Warszawie, w godzinach 18:00-20:15.</b></p>\n          </div>\n          <div class="span4">\n            <h1>dla kogo?</h1>\n            <p>Dla wszystkich początkujących. W szczególności tych, którzy potrafią już napisać prostą aplikację w Javie, nie boją się pojęć polimorfizm i dziedziczenie, jednak nie znają technologii, bibliotek i okolic Javy. Dla wszystkich, którzy chcą tworzyć <b>dobry </b>kod.</p>\n          </div>\n          <div class="span4">\n            <h1>chcesz zostać prelegentem?</h1>\n            <p>To świetnie! Ciągle poszukujemy prelegentów na nadchodzące spotkania. Jeżeli czujesz się na siłach to  <a href="#/prelegents">tutaj </a>są szczegóły. </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="span6">\n            <h1>kim jesteśmy</h1>\n            <p>Jesteśmy inicjatywą stworzoną i prowadzoną przez <a href="http://www.warszawa.jug.pl">Warszawa JUG</a>. .....tu coś więcej....</p>\n          </div>\n          <div class="span6">\n            <h1>najbliższe spotkanie</h1>\n            <h3>Spotkanie inauguracyjne</h3>\n            <p>Termin: 15.10.2013 godz. 18:00, Lokalizacja: MIMUW, Sponsor: brak</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="meetings" scroll-spy="scroll-spy" page="1" class="section background-meetings">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h1>spotkania</h1>\n            <p>Aby być na bieżąco, zasubskrybuj nasz<a href=""> kalendarz - todo -kalendarz</a></p>\n            <h3>Przed nami:</h3>\n            <p>15.10.2013 <a href="#/meeting/1">Spotkanie inauguracyjne</a> - <a href="#/prelegents/ktos">Ktoś Ktosiński</a></p>\n            <!--{next_meetings}-->\n          </div>\n        </div>\n        <div class="row">\n          <div class="span12">\n            <h3>Za nami:</h3>\n            <p>Tu z czasem pojawią się spotkania, które już się odbyły</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="cooperation" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-cooperation">\n    <div class="centered darkenBox">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h1>Współpraca</h1>\n            <p> Podobnie jak w przypadku regularnych spotkań grupy WJUG istnieje możliwość sponsorowania spotkania. W przypadku chęci współpracy w innej formie zachęcamy do zapoznania się z informacją na <a href="http://www.warszawa.jug.pl/#/cooperation">stronie WJUG</a>.</p>\n            <h2>sponsorowanie spotkania</h2>\n            <p>Przewidujemy możliwość prezentacji firmy-sponsora zainteresowanego reklamą siebie, np. w celach rekrutacyjnych, przy otwarciu spotkania.  Sądzimy, że krótkie wprowadzenie o obszarach działalności firmy i jej oczekiwaniach rynkowych oraz ofert pracy znacząco zwiększa możliwości pozyskania wartościowych pracowników.</p>\n            <p>Zakładamy czas 10 minut, który w naszej ocenie jest wystarczający, aby przekazać właściwą dawkę wiedzy nt. firmy przy jednoczesnym utrzymaniu zainteresowania słuchaczy (którzy przede wszystkim przychodzą na spotkanie techniczne i mogliby źle wspominać je wyłącznie po przedłużającym się wstępie firmy).</p>\n            <p>Samo otwarcie spotkania jest częścią "pakietu" sponsorskiego. Udział sponsora jest ponadto nagradzany umieszczeniem jego logo i linka do strony domowej sponsora przy zapowiedzi spotkania, wliczając w to późniejsze archiwum spotkań.</p>\n            <p>Istnieje również możliwość rozdania ulotek firmowych sponsora podczas spotkania.</p>\n            <p>Zwracamy uwagę na tzw. "gęstość informacji". Z przyjemnością poświęcimy kilkanaście minut, żeby dowiedzieć się, czy w danej firmie warto pracować. Nie interesują nas roczne obroty firmy, ale czy ta informacja przekłada sie jakkolwiek na warunki pracy? Ważne są stawki, nadgodziny, czy w okolicy jest dobre jedzenie, czy w godzinach pracy mogę pójść do lekarza lub odebrac dziecko z przedszkola, jaki jest "WTF factor", narzędzia i metodologia pracy, czy mogę pracować z domu, ścieżka kariery, itp.</p>\n            <p>Zachęcamy do delegowania osób technicznych na nasze spotkania z czasem wystąpienia nie przekraczającym 10 minut.</p>\n            <p>W związku z tym, że nasze spotkania mają dość dobrze określoną grupę docelową prosimy o dostosowanie do niej zarówno ofert jak i sposobu ich prezentacji na początku spotkania.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="partners" scroll-spy="scroll-spy" page="1" class="section background-partners">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h1>Partnerzy grupy</h1>\n          </div>\n        </div>\n        <div class="row">\n          <!--naukowi-->\n          <div class="span5">\n            <p><img src="img/partners/mimuw-logo.png" width="200"/></p>\n          </div>\n          <!--licencje-->\n          <div class="span5"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div id="about" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-about">\n  <div class="centered darkenBox">\n    <div class="container">\n      <div class="row">\n        <div class="span4">\n          <h1>czym jest Jinkubator?</h1>\n          <p>Są to cykliczne spotkania dla początkujących programistów Javy. Odbywają się one<b> w sali 5440 budynku Wydziału MIMUW na ulicy Banacha 2 w Warszawie, w godzinach 18:00-20:15.</b></p>\n        </div>\n        <div class="span4">\n          <h1>dla kogo?</h1>\n          <p>Dla wszystkich początkujących. W szczególności tych, którzy potrafią już napisać prostą aplikację w Javie, nie boją się pojęć polimorfizm i dziedziczenie, jednak nie znają technologii, bibliotek i okolic Javy. Dla wszystkich, którzy chcą tworzyć <b>dobry </b>kod.</p>\n        </div>\n        <div class="span4">\n          <h1>chcesz zostać prelegentem?</h1>\n          <p>To świetnie! Ciągle poszukujemy prelegentów na nadchodzące spotkania. Jeżeli czujesz się na siłach to  <a href="#/prelegents">tutaj </a>są szczegóły. </p>\n        </div>\n      </div>\n      <div class="row">\n        <div class="span6">\n          <h1>kim jesteśmy</h1>\n          <p>Jesteśmy inicjatywą stworzoną i prowadzoną przez <a href="http://www.warszawa.jug.pl">Warszawa JUG</a>. .....tu coś więcej....</p>\n        </div>\n        <div class="span6">\n          <h1>najbliższe spotkanie</h1>\n          <h3>Spotkanie inauguracyjne</h3>\n          <p>Termin: 15.10.2013 godz. 18:00, Lokalizacja: MIMUW, Sponsor: brak</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div id="cooperation" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-cooperation">\n  <div class="centered darkenBox">\n    <div class="container">\n      <div class="row">\n        <div class="span12">\n          <h1>Współpraca</h1>\n          <p> Podobnie jak w przypadku regularnych spotkań grupy WJUG istnieje możliwość sponsorowania spotkania. W przypadku chęci współpracy w innej formie zachęcamy do zapoznania się z informacją na <a href="http://www.warszawa.jug.pl/#/cooperation">stronie WJUG</a>.</p>\n          <h2>sponsorowanie spotkania</h2>\n          <p>Przewidujemy możliwość prezentacji firmy-sponsora zainteresowanego reklamą siebie, np. w celach rekrutacyjnych, przy otwarciu spotkania.  Sądzimy, że krótkie wprowadzenie o obszarach działalności firmy i jej oczekiwaniach rynkowych oraz ofert pracy znacząco zwiększa możliwości pozyskania wartościowych pracowników.</p>\n          <p>Zakładamy czas 10 minut, który w naszej ocenie jest wystarczający, aby przekazać właściwą dawkę wiedzy nt. firmy przy jednoczesnym utrzymaniu zainteresowania słuchaczy (którzy przede wszystkim przychodzą na spotkanie techniczne i mogliby źle wspominać je wyłącznie po przedłużającym się wstępie firmy).</p>\n          <p>Samo otwarcie spotkania jest częścią "pakietu" sponsorskiego. Udział sponsora jest ponadto nagradzany umieszczeniem jego logo i linka do strony domowej sponsora przy zapowiedzi spotkania, wliczając w to późniejsze archiwum spotkań.</p>\n          <p>Istnieje również możliwość rozdania ulotek firmowych sponsora podczas spotkania.</p>\n          <p>Zwracamy uwagę na tzw. "gęstość informacji". Z przyjemnością poświęcimy kilkanaście minut, żeby dowiedzieć się, czy w danej firmie warto pracować. Nie interesują nas roczne obroty firmy, ale czy ta informacja przekłada sie jakkolwiek na warunki pracy? Ważne są stawki, nadgodziny, czy w okolicy jest dobre jedzenie, czy w godzinach pracy mogę pójść do lekarza lub odebrac dziecko z przedszkola, jaki jest "WTF factor", narzędzia i metodologia pracy, czy mogę pracować z domu, ścieżka kariery, itp.</p>\n          <p>Zachęcamy do delegowania osób technicznych na nasze spotkania z czasem wystąpienia nie przekraczającym 10 minut.</p>\n          <p>W związku z tym, że nasze spotkania mają dość dobrze określoną grupę docelową prosimy o dostosowanie do niej zarówno ofert jak i sposobu ich prezentacji na początku spotkania.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div id="meetings" scroll-spy="scroll-spy" page="1" class="section background-meetings">\n  <div class="centered">\n    <div class="container">\n      <div class="row">\n        <div class="span12">\n          <h1>spotkania</h1>\n          <p>Aby być na bieżąco, zasubskrybuj nasz<a href=""> kalendarz - todo -kalendarz</a></p>\n          <h3>Przed nami:</h3>\n          <p>15.10.2013 <a href="#/meeting/1">Spotkanie inauguracyjne</a> - <a href="#/prelegents/ktos">Ktoś Ktosiński</a></p>\n          <!--{next_meetings}-->\n        </div>\n      </div>\n      <div class="row">\n        <div class="span12">\n          <h3>Za nami:</h3>\n          <p>Tu z czasem pojawią się spotkania, które już się odbyły</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div id="partners" scroll-spy="scroll-spy" page="1" class="section background-partners">\n  <div class="centered">\n    <div class="container">\n      <div class="row">\n        <div class="span12">\n          <h1>Partnerzy grupy</h1>\n        </div>\n      </div>\n      <div class="row">\n        <!--naukowi-->\n        <div class="span5">\n          <p><img src="img/partners/mimuw-logo.png" width="200"/></p>\n        </div>\n        <!--licencje-->\n        <div class="span5"></div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>1 Spotkanie</h4>\n            <h2>{subject}</h2>\n            <h3>Ktoś Ktosiński</h3>\n            <p>Termin: {date}</p>\n            <p>Lokalizacja: {loc}</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>{meeting_desc}\n            <h3>O prelegencie:</h3>\n            <p>Tu tekst o prelegencie</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
var menuEl_mixin = function(url, text){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<li');
buf.push(attrs(merge({ 'ng-class':("getClass('" + (url) + "')") }, attributes), merge({"ng-class":true}, escaped, true)));
buf.push('><a');
buf.push(attrs({ 'ng-href':("#" + (url) + "") }, {"ng-href":true}));
buf.push('>' + escape((interp = text) == null ? '' : interp) + '</a></li>');
};
var menuElOut_mixin = function(url, text){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<li');
buf.push(attrs(merge({ 'ng-class':("getClass('" + (url) + "')") }, attributes), merge({"ng-class":true}, escaped, true)));
buf.push('><a');
buf.push(attrs({ 'ng-href':("" + (url) + "") }, {"ng-href":true}));
buf.push('>' + escape((interp = text) == null ? '' : interp) + '</a></li>');
};
buf.push('\n<ul>');
__indent.push('  ');
menuEl_mixin('/about', 'o jinkubatorze');
__indent.pop();
__indent.push('  ');
menuEl_mixin('/meetings', 'spotkania');
__indent.pop();
__indent.push('  ');
menuEl_mixin('/cooperation', 'współpraca');
__indent.pop();
__indent.push('  ');
menuEl_mixin('/partners' , 'partnerzy');
__indent.pop();
__indent.push('  ');
menuEl_mixin('/prelegents' , 'prelegenci');
__indent.pop();
__indent.push('  ');
menuElOut_mixin('http://www.google.com/calendar/render?cid=7dmp09fjl82d57m3dgu4gj020g@group.calendar.google.com', 'kalendarz');
__indent.pop();
__indent.push('  ');
menuElOut_mixin('http://groups.google.com/group/jinkubator-admin/post?sendowner=1&hl=pl&pli=1' , 'kontakt');
__indent.pop();
buf.push('\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>Tu tekst o prelegencie</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div ng-controller="PageCtrl">\n  <div id="top" page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div id="top" class="span12">\n            <h1>Prelegenci</h1>\n            <h3>Zostań prelegentem</h3>\n            <h3>Dotychczas wystąpili</h3>\n            <p>Tu wkrótce pojawią się informacje o naszych prelegentach</p>\n            <!--#{id}.section.span11-->\n            <!--    h4 {imie i nazwisko}-->\n            <!--    include prelegent/{id}-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};