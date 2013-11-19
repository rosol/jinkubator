module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html lang="en" ng-app="app">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n    <meta name="viewport" content="width=device-width" initial-scale="2.0">\n    <meta name="description" content="">\n    <meta name="author" content="">\n    <title ng-bind-template="Jinkubator"></title>\n    <link rel="stylesheet" href="css/app.css"><!--[if lte IE 7]>\n    <script src="http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script><![endif]--><!--[if lte IE 8]>\n    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <script>\n      window.brunch = window.brunch || {};\n      window.brunch[\'auto-reload\'] = {\n          enabled: true\n      };\n    </script>\n    <script src="js/vendor.js"></script>\n    <script src="js/app.js"></script>\n  </head>\n  <body ng-controller="AppCtrl">\n    <div class="top-menu">\n      <div class="top-menu-inner"><a href="#/home" class="brand">wjug</a>\n        <div ng-include="\'partials/nav.html\'" class="nav"></div>\n      </div>\n    </div>\n    <div class="wrapper">\n      <div class="main-content">\n        <div ng-switch="subview" class="subview">\n          <div ng-switch-when="loading" ui-animate>\n            <div page="1" class="section">\n              <div class="centered">\n                <div class="container">\n                  <div class="row">\n                    <div class="span12">\n                      <p>loading...</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div ng-switch-when="main_page" ng-include=" \'partials/main_page.html\' " ui-animate></div>\n          <div ng-switch-when="prelegents" ng-include=" \'partials/prelegents.html\' " ui-animate></div>');
var meeting_mixin = function(id){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('\n          ');
buf.push.apply(buf, __indent);
buf.push('<div');
buf.push(attrs({ terse: true, 'ng-switch-when':("meeting"+id), 'ng-include':(" 'partials/meeting/"+id+".html' "), 'ui-animate':(true) }, {"ng-switch-when":true,"ng-include":true,"ui-animate":true}));
buf.push('>                   </div>');
};
__indent.push('          ');
meeting_mixin(1);
__indent.pop();
__indent.push('          ');
meeting_mixin(2);
__indent.pop();
__indent.push('          ');
meeting_mixin(3);
__indent.pop();
__indent.push('          ');
meeting_mixin(4);
__indent.pop();
__indent.push('          ');
meeting_mixin(5);
__indent.pop();
__indent.push('          ');
meeting_mixin(6);
__indent.pop();
__indent.push('          ');
meeting_mixin(7);
__indent.pop();
__indent.push('          ');
meeting_mixin(8);
__indent.pop();
buf.push('\n          <!--{next_meetings}-->\n        </div>\n      </div>\n      <div class="push"></div>\n    </div>\n    <div class="footer">\n      <div ng-include=" \'partials/footer.html\' " class="container"></div>\n    </div>\n  </body>\n</html>');
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
buf.push('\n<div ng-controller="PageCtrl">\n  <div id="about" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-about">\n    <div class="centered darkenBox">\n      <div class="container">\n        <div class="row darkenBox">\n          <div class="row">\n            <div class="span4">\n              <h1>czym jest Jinkubator?</h1>\n              <p>Są to cykliczne spotkania dla początkujących programistów Javy. Odbywają się one<b> w budynku Wydziału MIMUW na ulicy Banacha 2 w Warszawie, w godzinach 18:15-20:15.</b></p>\n            </div>\n            <div class="span4">\n              <h1>dla kogo?</h1>\n              <p>Dla wszystkich początkujących. W szczególności tych, którzy potrafią już napisać prostą aplikację w Javie, nie boją się pojęć polimorfizm i dziedziczenie, jednak nie znają technologii, bibliotek i okolic Javy. Dla wszystkich, którzy chcą tworzyć <b>dobry </b>kod.</p>\n            </div>\n            <div class="span4">\n              <h1>chcesz zostać prelegentem?</h1>\n              <p>To świetnie! Ciągle poszukujemy prelegentów na nadchodzące spotkania. Jeżeli czujesz się na siłach to  <a href="#/prelegents">tutaj </a>są szczegóły. </p>\n            </div>\n          </div>\n          <div class="row">\n            <div class="span6">\n              <h1>kim jesteśmy</h1>\n              <p>Jesteśmy inicjatywą stworzoną i prowadzoną przez <a href="http://www.warszawa.jug.pl">Warszawa JUG</a> specjalnie dla osób, które nie zebrały jeszcze dużego doświadczenia w Javie, a chciałyby mieć łatwiejszy start na rynku pracy lub po prostu poznać aktualnie używane technologie w trochę szerszym kontekście. Jeżeli tylko spodobał Ci się temat najbliższego spotkania to zapraszamy!</p>\n            </div>\n            <div class="span6">\n              <h1>najbliższe spotkanie</h1>\n              <h3> </h3><a href="#/meeting/3">3. GIT - krok po kroku</a> - Michał Lewandowski\n              <p>Termin: 26.11.2013 godz. 18:15, Lokalizacja: MIMUW, Sponsor: brak</p>\n            </div>\n          </div>\n        </div>\n        <div class="row fixedHeight"></div>\n        <div class="row darkenBox">     \n          <div class="row otherLogos">\n            <div class="span4">\n              <h1>chcesz więcej?</h1>\n              <div class="row">\n                <div class="span2"><a href="http://warszawa.jug.pl" target="_blank"><img src="img/partners/wjug.png"/></a></div>\n              </div>\n            </div>\n            <div class="span7">\n              <h1>nie tylko java?</h1>\n              <div class="row">\n                <div class="span3"><a href="http://pywaw.org" target="_blank"><img src="img/partners/otherGroups/pywaw.png" class="otherLogo"/></a></div>\n                <div class="span3"><a href="http://agilewarsaw.com" target="_blank"><img src="img/partners/otherGroups/agile_warsaw.png" class="otherLogo"/></a></div>\n              </div>\n              <div class="row">\n                <div class="span3"><a href="http://scalania.pl" target="_blank" id="scalania" class="text-center">Scalania</a></div>\n                <div class="span3"><a href="http://mobile-warsaw.pl" target="_blank"><img src="img/partners/otherGroups/mobile_warsaw.png"/></a></div>\n              </div>\n            </div>\n          </div>\n          <div class="row otherLogos">\n            <div class="span11">\n              <h1>nadchodzące konferencje i warsztaty</h1>\n              <div class="row">\n                <div class="span3"><a href="http://v2.gitkata.pl" target="_blank"><img src="img/partners/conferences/git_kata.png" class="otherLogo"/></a></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="meetings" scroll-spy="scroll-spy" page="1" class="section background-meetings">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h1>spotkania</h1>\n            <p>Aby być na bieżąco, zasubskrybuj nasz<a href="http://www.google.com/calendar/render?cid=7dmp09fjl82d57m3dgu4gj020g@group.calendar.google.com"> kalendarz</a> (wspólny z warszawskim JUGiem).</p>\n            <h3>Przed nami:</h3>\n            <p>26.11.2013 - <a href="#/meeting/3">3. GIT - krok po kroku</a> -  Michał Lewandowski</p>\n            <p>10.12.2013 - <a href="#/meeting/4">4. IDE</a> -  Jakub Kubryński, Krzysztof Nielepkowiczs</p>\n            <p>07.01.2014 - <a href="#/meeting/5">5. Guava - JDK na sterydach</a> -  Piotr Betkier</p>\n            <p>21.01.2014 - <a href="#/meeting/6">6. Kariera programisty</a> -  wielu prelegentów</p>\n            <p>04.02.2014 - <a href="#/meeting/7">7. Podstawy testowania</a> -  Adam Pierzchała</p>\n            <p>18.02.2014 - <a href="#/meeting/8">8. Mockito - biblioteka do mockowania</a> -  Marcin Zajączkowski</p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="span12">\n            <h3>Za nami:</h3>\n            <p>12.11.2013 - <a href="#/meeting/2">2. Podstawy warsztatu projektowego</a> - <a href="#/prelegents/adam_chudzik">Adam Chudzik </a></p>\n            <p>29.10.2013 - <a href="#/meeting/1">1. Łagodne wprowadzenie do Mavena</a> - <a href="#/prelegents/arkadiusz_konior">Arkadiusz Konior</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="cooperation" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-cooperation">\n    <div class="centered darkenBox">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h1>Współpraca</h1>\n            <p> Podobnie jak w przypadku regularnych spotkań grupy WJUG istnieje możliwość sponsorowania spotkania. W przypadku chęci współpracy w innej formie zachęcamy do zapoznania się z informacją na <a href="http://www.warszawa.jug.pl/#/cooperation">stronie WJUG</a>.</p>\n            <h2>sponsorowanie spotkania</h2>\n            <p>Przewidujemy możliwość prezentacji firmy-sponsora zainteresowanego reklamą siebie, np. w celach rekrutacyjnych, przy otwarciu spotkania.  Sądzimy, że krótkie wprowadzenie o obszarach działalności firmy i jej oczekiwaniach rynkowych oraz ofert pracy znacząco zwiększa możliwości pozyskania wartościowych pracowników.</p>\n            <p>Zakładamy czas 10 minut, który w naszej ocenie jest wystarczający, aby przekazać właściwą dawkę wiedzy nt. firmy przy jednoczesnym utrzymaniu zainteresowania słuchaczy (którzy przede wszystkim przychodzą na spotkanie techniczne i mogliby źle wspominać je wyłącznie po przedłużającym się wstępie firmy).</p>\n            <p>Samo otwarcie spotkania jest częścią "pakietu" sponsorskiego. Udział sponsora jest ponadto nagradzany umieszczeniem jego logo i linka do strony domowej sponsora przy zapowiedzi spotkania, wliczając w to późniejsze archiwum spotkań.</p>\n            <p>Istnieje również możliwość rozdania ulotek firmowych sponsora podczas spotkania.</p>\n            <p>Zwracamy uwagę na tzw. "gęstość informacji". Z przyjemnością poświęcimy kilkanaście minut, żeby dowiedzieć się, czy w danej firmie warto pracować. Nie interesują nas roczne obroty firmy, ale czy ta informacja przekłada sie jakkolwiek na warunki pracy? Ważne są stawki, nadgodziny, czy w okolicy jest dobre jedzenie, czy w godzinach pracy mogę pójść do lekarza lub odebrac dziecko z przedszkola, jaki jest "WTF factor", narzędzia i metodologia pracy, czy mogę pracować z domu, ścieżka kariery, itp.</p>\n            <p>Zachęcamy do delegowania osób technicznych na nasze spotkania z czasem wystąpienia nie przekraczającym 10 minut.</p>\n            <p>W związku z tym, że nasze spotkania mają dość dobrze określoną grupę docelową prosimy o dostosowanie do niej zarówno ofert jak i sposobu ich prezentacji na początku spotkania.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="partners" scroll-spy="scroll-spy" page="1" class="section background-partners">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h1>Partnerzy grupy</h1>\n          </div>\n        </div>\n        <div class="row">\n          <!--naukowi-->\n          <div class="span5">\n            <p><img src="img/partners/mimuw-logo.png" width="200"/></p>\n          </div>\n          <!--licencje-->\n          <div class="span5"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div id="about" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-about">\n  <div class="centered darkenBox">\n    <div class="container">\n      <div class="row darkenBox">\n        <div class="row">\n          <div class="span4">\n            <h1>czym jest Jinkubator?</h1>\n            <p>Są to cykliczne spotkania dla początkujących programistów Javy. Odbywają się one<b> w budynku Wydziału MIMUW na ulicy Banacha 2 w Warszawie, w godzinach 18:15-20:15.</b></p>\n          </div>\n          <div class="span4">\n            <h1>dla kogo?</h1>\n            <p>Dla wszystkich początkujących. W szczególności tych, którzy potrafią już napisać prostą aplikację w Javie, nie boją się pojęć polimorfizm i dziedziczenie, jednak nie znają technologii, bibliotek i okolic Javy. Dla wszystkich, którzy chcą tworzyć <b>dobry </b>kod.</p>\n          </div>\n          <div class="span4">\n            <h1>chcesz zostać prelegentem?</h1>\n            <p>To świetnie! Ciągle poszukujemy prelegentów na nadchodzące spotkania. Jeżeli czujesz się na siłach to  <a href="#/prelegents">tutaj </a>są szczegóły. </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="span6">\n            <h1>kim jesteśmy</h1>\n            <p>Jesteśmy inicjatywą stworzoną i prowadzoną przez <a href="http://www.warszawa.jug.pl">Warszawa JUG</a> specjalnie dla osób, które nie zebrały jeszcze dużego doświadczenia w Javie, a chciałyby mieć łatwiejszy start na rynku pracy lub po prostu poznać aktualnie używane technologie w trochę szerszym kontekście. Jeżeli tylko spodobał Ci się temat najbliższego spotkania to zapraszamy!</p>\n          </div>\n          <div class="span6">\n            <h1>najbliższe spotkanie</h1>\n            <h3> </h3><a href="#/meeting/3">3. GIT - krok po kroku</a> - Michał Lewandowski\n            <p>Termin: 26.11.2013 godz. 18:15, Lokalizacja: MIMUW, Sponsor: brak</p>\n          </div>\n        </div>\n      </div>\n      <div class="row fixedHeight"></div>\n      <div class="row darkenBox">     \n        <div class="row otherLogos">\n          <div class="span4">\n            <h1>chcesz więcej?</h1>\n            <div class="row">\n              <div class="span2"><a href="http://warszawa.jug.pl" target="_blank"><img src="img/partners/wjug.png"/></a></div>\n            </div>\n          </div>\n          <div class="span7">\n            <h1>nie tylko java?</h1>\n            <div class="row">\n              <div class="span3"><a href="http://pywaw.org" target="_blank"><img src="img/partners/otherGroups/pywaw.png" class="otherLogo"/></a></div>\n              <div class="span3"><a href="http://agilewarsaw.com" target="_blank"><img src="img/partners/otherGroups/agile_warsaw.png" class="otherLogo"/></a></div>\n            </div>\n            <div class="row">\n              <div class="span3"><a href="http://scalania.pl" target="_blank" id="scalania" class="text-center">Scalania</a></div>\n              <div class="span3"><a href="http://mobile-warsaw.pl" target="_blank"><img src="img/partners/otherGroups/mobile_warsaw.png"/></a></div>\n            </div>\n          </div>\n        </div>\n        <div class="row otherLogos">\n          <div class="span11">\n            <h1>nadchodzące konferencje i warsztaty</h1>\n            <div class="row">\n              <div class="span3"><a href="http://v2.gitkata.pl" target="_blank"><img src="img/partners/conferences/git_kata.png" class="otherLogo"/></a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
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
buf.push('\n<div id="meetings" scroll-spy="scroll-spy" page="1" class="section background-meetings">\n  <div class="centered">\n    <div class="container">\n      <div class="row">\n        <div class="span12">\n          <h1>spotkania</h1>\n          <p>Aby być na bieżąco, zasubskrybuj nasz<a href="http://www.google.com/calendar/render?cid=7dmp09fjl82d57m3dgu4gj020g@group.calendar.google.com"> kalendarz</a> (wspólny z warszawskim JUGiem).</p>\n          <h3>Przed nami:</h3>\n          <p>26.11.2013 - <a href="#/meeting/3">3. GIT - krok po kroku</a> -  Michał Lewandowski</p>\n          <p>10.12.2013 - <a href="#/meeting/4">4. IDE</a> -  Jakub Kubryński, Krzysztof Nielepkowiczs</p>\n          <p>07.01.2014 - <a href="#/meeting/5">5. Guava - JDK na sterydach</a> -  Piotr Betkier</p>\n          <p>21.01.2014 - <a href="#/meeting/6">6. Kariera programisty</a> -  wielu prelegentów</p>\n          <p>04.02.2014 - <a href="#/meeting/7">7. Podstawy testowania</a> -  Adam Pierzchała</p>\n          <p>18.02.2014 - <a href="#/meeting/8">8. Mockito - biblioteka do mockowania</a> -  Marcin Zajączkowski</p>\n        </div>\n      </div>\n      <div class="row">\n        <div class="span12">\n          <h3>Za nami:</h3>\n          <p>12.11.2013 - <a href="#/meeting/2">2. Podstawy warsztatu projektowego</a> - <a href="#/prelegents/adam_chudzik">Adam Chudzik </a></p>\n          <p>29.10.2013 - <a href="#/meeting/1">1. Łagodne wprowadzenie do Mavena</a> - <a href="#/prelegents/arkadiusz_konior">Arkadiusz Konior</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
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
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>1 Spotkanie</h4>\n            <h2>Łagodne wprowadzenie do Maven</h2>\n            <h3>Arkadiusz Konior</h3>\n            <p>Termin: 29.10.2013, 18:00</p>\n            <p>Lokalizacja: s. 3180 MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Opowiem o tym czym jest maven, jak go zainstalować i używać. Pokażę jak kompilować, testować i budować projekty javowe przy użyciu mavena. Omówię budowę pliku pom.xml, cykl życia, opis i mechanizm zależności (group, artifact, version, classifier), ściąganie zależności i przechowywanie ich na dysku. Ponadto będzie można posłuchać o strukturze katalogowej projektu, lokalnych i zdalnych repozytoriach, archetypach, profilach i pluginach (dodawanie, konfiguracja).\n            <h3>O prelegencie:</h3>\n            <p>Z wykształcenia matematyk, obecnie programista Groovy z 7-letnim doświadczeniem w Javowych technologiach. Przekonany i stosujący się do zasad TDD. Obecnie pracuje nad open-sourcowym, opartym o gradle, build systemem dla aplikacji mobilnych. Zawodowo związany z firmą Polidea. Na tegorocznej Warsjawie prowadził szkolenie z gradle.</p>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/z0Q3SepVgEE" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>2 Spotkanie</h4>\n            <h2>Podstawy warsztatu projektowego</h2>\n            <h3>Adam Chudzik</h3>\n            <p>Termin: 12.11.2013, 18:15</p>\n            <p>Lokalizacja: s. 5440 MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p>Jako świeży deweloper trafiasz do nowego projektu i poza istniejącym kodem spada na Ciebie grad nazw, o których nikt nie wspominał na studiach:\n              <ul>\n                <li>git</li>\n                <li>gerrit</li>\n                <li>\n                   \n                  maven\n                </li>\n                <li>\n                   \n                  Jenkins\n                </li>\n              </ul>\n            </p>\n            <p>Na tej prezentacji postaram się oswoić powyższe pojęcia, pokazać podstawy pracy z współczesnym tymi narzędziami i rozwiązania dla typowych na początku problemów.</p>\n            <h3>O prelegencie:</h3>\n            <p>Adam Chudzik jest pracownikiem Działu Sieci Komputerowych (DSK) Uniwersytetu Warszawskiego. Za dnia dłubie w Javie, po zmroku nad (jak ma nadzieję) Kolejną-Wielką-Rzeczą!:) Adept Agile i Software Craftsmanship.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>3 Spotkanie</h4>\n            <h3>GIT - krok po kroku</h3>\n            <h3>Michał Lewandowski</h3>\n            <p>Termin: 26.11.2013, 18:15</p>\n            <p>Lokalizacja: MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Bez systemu kontroli wersji ciężko dzisiaj pracować. Na tym spotkaniu JInkubatora przedstawię jeden z kilku systemów kontroli wersji jakim jest git. Będzie to warsztat w stylu od zera do bohatera. Zaczniemy od narzędzi jakie przydają się podczas pracy z git\'em, następnie przejdziemy przez podstawowe operacje i dojdziemy do troszeczkę zawansowanych czynności, a zakończymy na git flow.\n            <p>Warsztat będzie się składał z kroków:\n              <ul>\n                <li>tools</li>\n                <li>init</li>\n                <li>local add, commit</li>\n                <li>what add means ?</li>\n                <li>git interlnals</li>\n                <li>git show</li>\n                <li>shortcuts</li>\n                <li>amend</li>\n                <li>unstage</li>\n                <li>unmodifing</li>\n                <li>tag</li>\n                <li>stash</li>\n                <li>bare repo</li>\n                <li>remotes</li>\n                <li>clone</li>\n                <li>branch</li>\n                <li>merge</li>\n                <li>diff</li>\n                <li>clean-up</li>\n                <li>fetch</li>\n                <li>rebase</li>\n                <li>configs</li>\n                <li>ignores</li>\n                <li>reflogs</li>\n                <li>interactive-rebase</li>\n                <li>bisect</li>\n                <li>revert</li>\n                <li>cherry-pick</li>\n                <li>gitflow</li>\n              </ul>\n            </p>\n            <h3>O prelegencie:</h3>\n            <p>TBA</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>4 Spotkanie</h4>\n            <h2>IDE</h2>\n            <h3>Jakub Kubryński, Krzysztof Nielepkowicz</h3>\n            <p>Termin: 10.12.2013 18:15</p>\n            <p>Lokalizacja: MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Gdyby rzeźbiarz nie potrafił posługiwać się dłutem, ciężko byłoby mu tworzyć dzieła sztuki - byłoby to zupełnie niemożliwe lub pochłaniało ogrom czasu. Podobna sytuacja w świecie programistów dotyczy naszej znajomości narzędzi choćby takich jak IDE. Na spotkaniu pokażemy czemu dobra znajomość środowiska pracy jest taka istotna i na których funkcjonalnościach powinni skupiać się początkujący programiści, żeby maksymalnie podnieść swoją efektywność i nie tracić czasu na niepotrzebne elementy. Zobaczymy też jak od strony praktycznej wygląda codzienne posługiwanie się IntelliJIDEA oraz Eclipse.\n            <h3>O prelegentach:</h3>\n            <h4>Jakub Kubryński</h4>\n            <p>Zawodowo związany z PayU z ramienia którego buduje ogniwo rozwojowe w Warszawie (trzecia głowa smoka). Prywatnie czuje się mocno przywiązany do pakietu java.util.concurrent i klasy sun.misc.Unsafe. Poza tym pasjonują go lekkie aplikacje, w których stosunek kodu do dostarczanej funkcjonalności jest jak najmniejszy.</p>\n            <h4>Krzysztof Nielepkowicz</h4>\n            <p>Z zamiłowania jestem fotografem oraz.... programistą. Nie przepuszczę żadnej okazji by fotografować, robię dużo dobrych zdjęć, które mają ducha i przesłanie. Lubię również programować, ostatnio nawet podczas podróży pociągiem do pracy wyciągam laptopa i programuję lub czytam o programowaniu. 18 lipca roku Pańskiego 2012 urodziła mi się córeczka, skutecznie konkuruje z moimi pasjami, stała się także moją główną modelką - nic dziwnego bo jest najładniejsza i najmądrzejsza ze wszystkich dzieci. Gdy śpi moja córa, siadam do programowania - czasem Java a ostatnio częściej C#, oba języki są bardzo przyjemne,  albo do obróbki zdjęć. Dziwnym trafem z zawodu jestem programistą i.... lubię swoją pracę :)</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>5 Spotkanie</h4>\n            <h2>Guava - JDK na sterydach</h2>\n            <h3>Piotr Betkier</h3>\n            <p>Termin: 7.01.2014 18:15</p>\n            <p>Lokalizacja: MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Java, pomimo wielu niewątpliwych zalet, jest językiem dość prymitywnym z kiepskim API w wielu miejscach JDK. Z odsieczą przychodzi Guava, biblioteka od Googla, która dodaje brakujące mechanizmy i pozwala pisać zwięzły i przejrzysty kod. Jest to aktualnie niezbędnik w arsenale każdego programisty Javowego.\n            <p>W ramach warsztatów pokażę jakie możliwości daje Guava i jakie problemy rozwiązuje. Między innymi refaktoryzować będziemy przerośnięty kod napisany w czystym JDK do czystszej postaci z wykorzystaniem Guavy.</p>\n            <h3>O prelegencie:</h3>\n            <p>Na co dzień tworzy internet w Grupie Allegro, wcześniej wspierał poszukiwania bozonu Higgsa rozwijając oprogramowanie do monitorowania akceleratorów w CERN. Urodzony perfekcjonista, nauczony pragmatyk. Godzi zainteresowanie światem Pythona i Javy. W ramach odskoczni od IT uwielbia aktywny wypoczynek pod każdą postacią.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>6 Spotkanie</h4>\n            <h2>Kariera programisty</h2>\n            <h3>wielu prelegentów</h3>\n            <p>Termin: 21.01.2014 18:15</p>\n            <p>Lokalizacja: MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p> Zastanawiałeś się jak pokierować swoją karierę? Co warto zrobić a co jest marnotrawstwem czasu? Jak się uczyć i czego? Jaka praca będzie najlepsza w dłuższej perspektywie?\n            <p> </p> Ponieważ nie ma prostych odpowiedzi na te pytania, planujemy zrobić spotkanie na którym wystąpi kilku doświadczonych programistów o różnych profilach, np.:\n            <ul>\n              <li>Jedna firma od początku</li>\n              <li>Tylko korporacje</li>\n              <li>Same małe firmy</li>\n              <li>Startupy</li>\n              <li>etc..</li>\n            </ul>\n            <p>Na spotkaniu opowiedzą nam oni o rozwoju swojej kariery.</p>\n            <p>Cel jest taki, żeby dzielić się doświadczeniem i zaplanować karierę na swoją miarę.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>7 Spotkanie</h4>\n            <h2>Podstawy testowania</h2>\n            <h3>Adam Pierzchała</h3>\n            <p>Termin: 4.02.2014 18:15</p>\n            <p>Lokalizacja: MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Chcesz mieć pewność, że Twój zachowuje się poprawnie? Chcesz aby sprawdzenie, czy nowa funkcjonalność działa nie wymagało przebudowania i uruchomienia całej aplikacji, a zamiast tego trwało kilka sekund? Przyjdź na to spotkanie, a nauczysz się pisać testy, które sprawią, że wprowadzanie zmian do kodu nie będzie się wiązało z bólami głowy i obawą, że się psuje się zachowania w zupełnie innej części systemu. Podczas spotkania będziecie mieli szansę zapoznać się z koncepcjami testów jednostkowych i integracyjnych, mockowania, TDD, oraz podstawowymi bibliotekami do testowania - junit i testng, a jeśli wystarczy czasu - podstawy mockito.\n            <h3>O prelegencie:</h3>\n            <p>Jestem Software Developerem w firmie Pragmatists, gdzie na co dzień pracuję stosując zwinne techniki, w tym choćby TDD i Pair Programming. Po godzinach realizuję szalone pomysły związane z automatycznym generowaniem wirtualnych terenów, tworzeniem gier i podbijaniem świata.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>8 Spotkanie</h4>\n            <h2>Mockito - biblioteka do mockowania</h2>\n            <h3>Marcin Zajączkowski</h3>\n            <p>Termin: 18.02.2014</p>\n            <p>Lokalizacja: MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Bez automatycznych testów jednostkowych bardzo trudno (niemożliwe?) jest zapewnić wysoką jakość tworzonego oprogramowania. Aby testy nie zaczęły nam bardziej przeszkadzać niż pomagać muszą być być łatwe w utrzymaniu, pokrywać możliwie dużo kodu produkcyjnego i jednocześnie bardzo szybko działać. Krótki czas wykonywania najłatwiej uzyskać badając w danym teście tylko wybraną odpowiedzialność jednej klasy. Współpracujące klasy są zastępowane przez dublerów (ang. test doubles), nad którymi sprawujemy pełną kontrolę. Aby robić to efektywnie potrzebne jest dobre narzędzie. I tu na scenę wchodzi Mockito - (IMHO) najlepsza biblioteka do mockowania dla aplikacji napisanych w Javie. \n            <h3>O prelegencie:</h3>\n            <p>Doświadczony programista i architekt od ponad 8 lat zawodowo zajmujący się tworzeniem oprogramowania. Specjalizuje się w budowaniu wysokiej jakości rozwiązań w oparciu o idee ruchu Software Craftsmanship z wykorzystaniem technik związanych z automatycznym testowaniem kodu (jak Test-Driven Development, czy Continuous Integration).</p>\n            <p>Oprócz codziennego wykorzystywania swojej wiedzy w realizowanych projektach prowadzi szkolenia oraz mentoring zespołów pokazując jak można tworzyć czytelny, testowalny i łatwy w utrzymaniu kod. Dodatkowo prelegent na konferencjach, ekspert techniczny podczas publicznych warsztatów oraz prowadzący zajęcia ze studentami.</p>\n            <p>Z zamiłowania entuzjasta wolnego oprogramowania, szczególnie powiązanego z Linuksem oraz autor i kontrybutor projektów FOSS. Od czasu do czasu bloguje o <a href="http://blog.solidsoft.info/">dobrym kodzie</a>.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
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
menuElOut_mixin('mailto:jinkubator-admin@googlegroups.com' , 'kontakt');
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
buf.push('\n<p>Adam Chudzik jest pracownikiem Działu Sieci Komputerowych (DSK) Uniwersytetu Warszawskiego. Za dnia dłubie w Javie, po zmroku nad (jak ma nadzieję) Kolejną-Wielką-Rzeczą!:) Adept Agile i Software Craftsmanship.</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>Jestem Software Developerem w firmie Pragmatists, gdzie na co dzień pracuję stosując zwinne techniki, w tym choćby TDD i Pair Programming. Po godzinach realizuję szalone pomysły związane z automatycznym generowaniem wirtualnych terenów, tworzeniem gier i podbijaniem świata.</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>Z wykształcenia matematyk, obecnie programista Groovy z 7-letnim doświadczeniem w Javowych technologiach. Przekonany i stosujący się do zasad TDD. Obecnie pracuje nad open-sourcowym, opartym o gradle, build systemem dla aplikacji mobilnych. Zawodowo związany z firmą Polidea. Na tegorocznej Warsjawie prowadził szkolenie z gradle.</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>Zawodowo związany z PayU z ramienia którego buduje ogniwo rozwojowe w Warszawie (trzecia głowa smoka). Prywatnie czuje się mocno przywiązany do pakietu java.util.concurrent i klasy sun.misc.Unsafe. Poza tym pasjonują go lekkie aplikacje, w których stosunek kodu do dostarczanej funkcjonalności jest jak najmniejszy.</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>Z zamiłowania jestem fotografem oraz.... programistą. Nie przepuszczę żadnej okazji by fotografować, robię dużo dobrych zdjęć, które mają ducha i przesłanie. Lubię również programować, ostatnio nawet podczas podróży pociągiem do pracy wyciągam laptopa i programuję lub czytam o programowaniu. 18 lipca roku Pańskiego 2012 urodziła mi się córeczka, skutecznie konkuruje z moimi pasjami, stała się także moją główną modelką - nic dziwnego bo jest najładniejsza i najmądrzejsza ze wszystkich dzieci. Gdy śpi moja córa, siadam do programowania - czasem Java a ostatnio częściej C#, oba języki są bardzo przyjemne,  albo do obróbki zdjęć. Dziwnym trafem z zawodu jestem programistą i.... lubię swoją pracę :)</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>Doświadczony programista i architekt od ponad 8 lat zawodowo zajmujący się tworzeniem oprogramowania. Specjalizuje się w budowaniu wysokiej jakości rozwiązań w oparciu o idee ruchu Software Craftsmanship z wykorzystaniem technik związanych z automatycznym testowaniem kodu (jak Test-Driven Development, czy Continuous Integration).</p>\n<p>Oprócz codziennego wykorzystywania swojej wiedzy w realizowanych projektach prowadzi szkolenia oraz mentoring zespołów pokazując jak można tworzyć czytelny, testowalny i łatwy w utrzymaniu kod. Dodatkowo prelegent na konferencjach, ekspert techniczny podczas publicznych warsztatów oraz prowadzący zajęcia ze studentami.</p>\n<p>Z zamiłowania entuzjasta wolnego oprogramowania, szczególnie powiązanego z Linuksem oraz autor i kontrybutor projektów FOSS. Od czasu do czasu bloguje o <a href="http://blog.solidsoft.info/">dobrym kodzie</a>.</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>TBA</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>Na co dzień tworzy internet w Grupie Allegro, wcześniej wspierał poszukiwania bozonu Higgsa rozwijając oprogramowanie do monitorowania akceleratorów w CERN. Urodzony perfekcjonista, nauczony pragmatyk. Godzi zainteresowanie światem Pythona i Javy. W ramach odskoczni od IT uwielbia aktywny wypoczynek pod każdą postacią.</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/2">2. Podstawy warsztatu projektowego</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/7">7. Podstawy testowania</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/1">1. Łagodne wprowadzenie do Maven</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/4">4. IDE</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/4">4. IDE</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/8">8. Mockito - biblioteka do mockowania</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/3">3. GIT - krok po kroku</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/5">5. 	Guava - JDK na sterydach</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div ng-controller="PageCtrl">\n  <div id="top" page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div id="top" class="span12">\n            <h1>Prelegenci</h1>\n            <h2>Zostań prelegentem</h2>\n            <p>Jeżeli masz ochotę pokazać coś trochę mniej doświadczonym programistom to zachęcamy do zgłaszania tematów w <a href="https://docs.google.com/forms/d/1Zt_ws-STBfDESwI1rzhBmKcbWPQnGtsvRnIksESl2BI/viewform">formularzu</a>. Na zaproponowane tam tematy odpisujemy układając agendy kolejnych spotkań, więc prosimy nie przejmuj się, gdy przez jakiś czas nie odpowiadamy na zamieszczane tam tematy - my naprawdę o nich pamiętamy :).</p>\n            <p>Preferowane przez nas tematy kręcą się wokół Javy - bibliotek frameworków. W szczególności:\n              <ul>\n                <li><span>popularne technologie i biblioteki związane z Javą</span></li>\n                <li><span>dobre praktyki programistyczne</span></li>\n                <li><span>zaawansowane zagadnienia Javy (refleksja, adnotacje, typy generyczne)</span></li>\n                <li><span>dobre środowisko programistyczne - używanie IDE, maven/gradle, continous integration, system kontroli wersji</span></li>\n                <li><span>testowanie oprogramowania</span></li>\n                <li><span>“okolice" programowania - planowanie kariery, możliwe ścieżki rozwoju itp.</span></li>\n              </ul>\n            </p>\n            <div class="fixedHeight"></div>\n            <h2>Dotychczas wystąpili</h2>');
var prelegent_mixin = function(name, id){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('\n            ');
buf.push.apply(buf, __indent);
buf.push('<div');
buf.push(attrs({ 'id':(id), "class": ('row') + ' ' + ('section') }, {"id":true}));
buf.push('>\n              ');
buf.push.apply(buf, __indent);
buf.push('<div class="span2"><img');
buf.push(attrs({ 'src':('img/prelegent/'+id+'.jpg'), 'alt':('') }, {"src":true,"alt":true}));
buf.push('/></div>\n              ');
buf.push.apply(buf, __indent);
buf.push('<div class="span9">\n                ');
buf.push.apply(buf, __indent);
buf.push('<h3>');
var __val__ = name
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h3>');
__indent.push('                ');
block && block();
__indent.pop();
buf.push('\n              ');
buf.push.apply(buf, __indent);
buf.push('</div>\n            ');
buf.push.apply(buf, __indent);
buf.push('</div>');
};
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Z wykształcenia matematyk, obecnie programista Groovy z 7-letnim doświadczeniem w Javowych technologiach. Przekonany i stosujący się do zasad TDD. Obecnie pracuje nad open-sourcowym, opartym o gradle, build systemem dla aplikacji mobilnych. Zawodowo związany z firmą Polidea. Na tegorocznej Warsjawie prowadził szkolenie z gradle.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/1">1. Łagodne wprowadzenie do Maven</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Arkadiusz Konior", "arkadiusz_konior");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Adam Chudzik jest pracownikiem Działu Sieci Komputerowych (DSK) Uniwersytetu Warszawskiego. Za dnia dłubie w Javie, po zmroku nad (jak ma nadzieję) Kolejną-Wielką-Rzeczą!:) Adept Agile i Software Craftsmanship.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/2">2. Podstawy warsztatu projektowego</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Adam Chudzik", "adam_chudzik");
__indent.pop();
buf.push('\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};