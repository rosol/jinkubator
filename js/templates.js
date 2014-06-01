module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html lang="en" ng-app="app">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n    <meta name="viewport" content="width=device-width" initial-scale="2.0">\n    <meta name="description" content="">\n    <meta name="author" content="">\n    <title ng-bind-template="Jinkubator"></title>\n    <link rel="stylesheet" href="css/app.css"><!--[if lte IE 7]>\n    <script src="http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script><![endif]--><!--[if lte IE 8]>\n    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <script>\n      window.brunch = window.brunch || {};\n      window.brunch[\'auto-reload\'] = {\n          enabled: true\n      };\n    </script>\n    <script src="js/vendor.js"></script>\n    <script src="js/app.js"></script>\n  </head>\n  <body ng-controller="AppCtrl">\n    <div class="top-menu">\n      <div class="top-menu-inner"><a href="#/home" class="brand">wjug</a>\n        <div ng-include="\'partials/nav.html\'" class="nav"></div>\n      </div>\n    </div>\n    <div class="wrapper">\n      <div class="main-content">\n        <div ng-switch="subview" class="subview">\n          <div ng-switch-when="loading" ui-animate>\n            <div page="1" class="section">\n              <div class="centered">\n                <div class="container">\n                  <div class="row">\n                    <div class="span12">\n                      <p>loading...</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div ng-switch-when="main_page" ng-include=" \'partials/main_page.html\' " ui-animate></div>\n          <div ng-switch-when="prelegents" ng-include=" \'partials/prelegents.html\' " ui-animate></div>');
 for (var meeting_id = 1; meeting_id <= 17; meeting_id++)
{
buf.push('\n          <div');
buf.push(attrs({ terse: true, 'ng-switch-when':("meeting" + meeting_id), 'ng-include':("'partials/meeting/".concat(meeting_id, ".html'")), 'ui-animate':(true) }, {"ng-switch-when":true,"ng-include":false,"ui-animate":false}));
buf.push('></div>');
}
buf.push('\n        </div>\n      </div>\n      <div class="push"></div>\n    </div>\n    <div class="footer">\n      <div ng-include=" \'partials/footer.html\' " class="container"></div>\n    </div>\n  </body>\n</html>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span8"><h1 id="a-first-level-header">A First Level Header</h1>\n<h2 id="a-second-level-header">A Second Level Header</h2>\n<p>Now is the time for all good men to come to\nthe aid of their country. This is just a\nregular paragraph.</p>\n<p>The quick brown fox jumped over the lazy\ndog&#39;s back.</p>\n<h3 id="header-3">Header 3</h3>\n<blockquote>\n<p>This is a blockquote.</p>\n<p>This is the second paragraph in the blockquote.</p>\n<h2 id="this-is-an-h2-in-a-blockquote">This is an H2 in a blockquote</h2>\n</blockquote>\n<p>Some of these words <em>are emphasized</em>.\nSome of these words <em>are emphasized also</em>.</p>\n<p>Use two asterisks for <strong>strong emphasis</strong>.\nOr, if you prefer, <strong>use two underscores instead</strong>.</p>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
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
buf.push('\n<div ng-controller="PageCtrl">\n  <div id="about" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-about">\n    <div class="centered darkenBox">\n      <div class="container">\n        <div class="row darkenBox">\n          <div class="row">\n            <div class="span4">\n              <h1>czym jest Jinkubator?</h1>\n              <p>Są to cykliczne spotkania dla początkujących programistów Javy. Odbywają się one<b> w budynku Wydziału MIMUW na ulicy Banacha 2 w Warszawie, w godzinach 18:15-20:15.</b></p>\n            </div>\n            <div class="span4">\n              <h1>dla kogo?</h1>\n              <p>Dla wszystkich początkujących. W szczególności tych, którzy potrafią już napisać prostą aplikację w Javie, nie boją się pojęć polimorfizm i dziedziczenie, jednak nie znają technologii, bibliotek i okolic Javy. Dla wszystkich, którzy chcą tworzyć <b>dobry </b>kod.</p>\n            </div>\n            <div class="span4">\n              <h1>chcesz zostać prelegentem?</h1>\n              <p>To świetnie! Ciągle poszukujemy prelegentów na nadchodzące spotkania. Jeżeli czujesz się na siłach to  <a href="#/prelegents">tutaj </a>są szczegóły. </p>\n            </div>\n          </div>\n          <div class="row">\n            <div class="span6">\n              <h1>kim jesteśmy</h1>\n              <p>Jesteśmy inicjatywą stworzoną i prowadzoną przez <a href="http://www.warszawa.jug.pl">Warszawa JUG</a> specjalnie dla osób, które nie zebrały jeszcze dużego doświadczenia w Javie, a chciałyby mieć łatwiejszy start na rynku pracy lub po prostu poznać aktualnie używane technologie w trochę szerszym kontekście. Jeżeli tylko spodobał Ci się temat najbliższego spotkania to zapraszamy!</p>\n            </div>\n            <div class="span6">\n              <h1>najbliższe spotkanie</h1>\n              <h3><a href="#/meeting/16">16. Injectowanie od zera - wprowadzenie do Guice</a> -  <a href="#/prelegents/pawel_cesar_sanjuan_szklarz">Paweł Cesar Sanjuan Szklarz</a></h3>\n              <p>Termin: 11.06.2014 (wyjątkowo we środę!) godz. 18:15, Lokalizacja: MIMUW, s. 4060</p>\n            </div>\n          </div>\n        </div>\n        <div class="row fixedHeight"></div>\n        <div class="row darkenBox">     \n          <div class="row otherLogos">\n            <div class="span4">\n              <h1>chcesz więcej?</h1>\n              <div class="row">\n                <div class="span2"><a href="http://warszawa.jug.pl" target="_blank"><img src="img/partners/wjug.png"/></a></div>\n              </div>\n            </div>\n            <div class="span7">\n              <h1>nie tylko java?</h1>\n              <div class="row">\n                <div class="span3"><a href="http://pywaw.org" target="_blank"><img src="img/partners/otherGroups/pywaw.png" class="otherLogo"/></a></div>\n                <div class="span3"><a href="http://agilewarsaw.com" target="_blank"><img src="img/partners/otherGroups/agile_warsaw.png" class="otherLogo"/></a></div>\n              </div>\n              <div class="row">\n                <div class="span3"><a href="http://scalania.pl" target="_blank" id="scalania" class="text-center">Scalania</a></div>\n                <div class="span3"><a href="http://mobile-warsaw.pl" target="_blank"><img src="img/partners/otherGroups/mobile_warsaw.png"/></a></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="meetings" scroll-spy="scroll-spy" page="1" class="section background-meetings">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h1>spotkania</h1>\n            <p>Aby być na bieżąco, zasubskrybuj nasz<a href="http://www.google.com/calendar/render?cid=7dmp09fjl82d57m3dgu4gj020g@group.calendar.google.com"> kalendarz</a> (wspólny z warszawskim JUGiem).</p>\n            <h3>Przed nami: </h3>\n            <p>11.06.2014 (wyjątkowo we środę!) - <a href="#/meeting/16">16. Injectowanie od zera - wprowadzenie do Guice</a> -  <a href="#/prelegents/pawel_cesar_sanjuan_szklarz">Paweł Cesar Sanjuan Szklarz</a></p>\n            <p>24.06.2014 - <a href="#/meeting/17">17. Spock - przyjemne testowanie</a> -  <a href="#/prelegents/dominik_przybysz">Dominik Przybysz</a></p>\n            <p>01.07.2014 - Walne spotkanie WJUG - wszyscy zainteresowani</p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="span12">\n            <h3>Za nami:</h3>\n            <p>27.05.2014 - <a href="#/meeting/15">15. Monitorowanie aplikacji</a> -  <a href="#/prelegents/tomasz_nurkiewicz">Tomasz Nurkiewicz</a></p>\n            <p>13.05.2014 - <a href="#/meeting/14">14. A journey in MongoDB land</a> -  <a href="#/prelegents/tugdual_grall">Tugdual Grall</a></p>\n            <p>29.04.2014 - <a href="#/meeting/13">13. JPA 2.0 cz. II</a> -  <a href="#/prelegents/rafal_nagrodzki">Rafał Nagrodzki</a></p>\n            <p>15.04.2014 - <a href="#/meeting/12">12. Code metrics</a> -  <a href="#/prelegents/adam_dubiel">Adam Dubiel</a></p>\n            <p>01.04.2014 - <a href="#/meeting/11">11. Clean code</a> -  <a href="#/prelegents/michal_lipski">Michał Lipski</a></p>\n            <p>18.03.2014 - <a href="#/meeting/10">10. JPA 2.0 cz. I</a> -  <a href="#/prelegents/rafal_nagrodzki">Rafał Nagrodzki</a></p>\n            <p>04.03.2014 - <a href="#/meeting/9">9. Spring Framework</a> -  <a href="#/prelegents/jakub_nabrdalik">Jakub Nabrdalik</a></p>\n            <p>18.02.2014 - <a href="#/meeting/8">8. Mockito - biblioteka do mockowania</a> -  <a href="#/prelegents/marcin_zajaczkowski">Marcin Zajączkowski</a></p>\n            <p>04.02.2014 - <a href="#/meeting/7">7. Podstawy testowania</a> -  <a href="#/prelegents/adam_pierzchala">Adam Pierzchała</a></p>\n            <p>21.01.2014 - <a href="#/meeting/6">6. Kariera programisty</a> -  wielu prelegentów</p>\n            <p>07.01.2014 - <a href="#/meeting/5">5. Guava - JDK na sterydach</a> -  <a href="#/prelegents/piotr_betkier">Piotr Betkier</a></p>\n            <p>10.12.2013 - <a href="#/meeting/4">4. IDE</a> -  <a href="#/prelegents/jakub_kubrynski">Jakub Kubryński</a>,  <a href="#/prelegents/krzysztof_nielepkowicz">Krzysztof Nielepkowicz</a></p>\n            <p>26.11.2013 - <a href="#/meeting/3">3. GIT - krok po kroku</a> -  <a href="#/prelegents/michal_lewandowski">Michał Lewandowski</a></p>\n            <p>12.11.2013 - <a href="#/meeting/2">2. Podstawy warsztatu projektowego</a> - <a href="#/prelegents/adam_chudzik">Adam Chudzik </a></p>\n            <p>29.10.2013 - <a href="#/meeting/1">1. Łagodne wprowadzenie do Mavena</a> - <a href="#/prelegents/arkadiusz_konior">Arkadiusz Konior</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="cooperation" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-cooperation">\n    <div class="centered darkenBox">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h1>Współpraca</h1>\n            <p> Podobnie jak w przypadku regularnych spotkań grupy WJUG istnieje możliwość sponsorowania spotkania. W przypadku chęci współpracy w innej formie zachęcamy do zapoznania się z informacją na <a href="http://www.warszawa.jug.pl/#/cooperation">stronie WJUG</a>.</p>\n            <h2>sponsorowanie spotkania</h2>\n            <p>Przewidujemy możliwość prezentacji firmy-sponsora zainteresowanego reklamą, np. w celach rekrutacyjnych, przy otwarciu spotkania.  Sądzimy, że krótkie wprowadzenie o obszarach działalności firmy i jej oczekiwaniach rynkowych oraz ofert pracy znacząco zwiększa możliwości pozyskania wartościowych pracowników.</p>\n            <p>Zakładamy czas 10 minut, który w naszej ocenie jest wystarczający, aby przekazać właściwą dawkę wiedzy nt. firmy przy jednoczesnym utrzymaniu zainteresowania słuchaczy (którzy przede wszystkim przychodzą na spotkanie techniczne i mogliby źle wspominać je wyłącznie po przedłużającym się wstępie firmy).</p>\n            <p>Samo otwarcie spotkania jest częścią "pakietu" sponsorskiego. Udział sponsora jest ponadto nagradzany umieszczeniem jego logo i linka do strony domowej sponsora przy zapowiedzi spotkania, wliczając w to późniejsze archiwum spotkań.</p>\n            <p>Istnieje również możliwość rozdania ulotek firmowych sponsora podczas spotkania.</p>\n            <p>Zwracamy uwagę na tzw. "gęstość informacji". Z przyjemnością poświęcimy kilkanaście minut, żeby dowiedzieć się, czy w danej firmie warto pracować. Nie interesują nas roczne obroty firmy, ale czy ta informacja przekłada sie jakkolwiek na warunki pracy? Ważne są stawki, nadgodziny, czy w okolicy jest dobre jedzenie, czy w godzinach pracy mogę pójść do lekarza lub odebrac dziecko z przedszkola, jaki jest "WTF factor", narzędzia i metodologia pracy, czy mogę pracować z domu, ścieżka kariery, itp.</p>\n            <p>Zachęcamy do delegowania osób technicznych na nasze spotkania z czasem wystąpienia nie przekraczającym 10 minut.</p>\n            <p>W związku z tym, że nasze spotkania mają dość dobrze określoną grupę docelową prosimy o dostosowanie do niej zarówno ofert jak i sposobu ich prezentacji na początku spotkania.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="partners" scroll-spy="scroll-spy" page="1" class="section background-partners">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h1>Partnerzy grupy</h1>\n          </div>\n        </div>\n        <div class="row">\n          <!--naukowi-->\n          <div class="span4">\n            <p><img src="img/partners/mimuw-logo.png" width="200"/></p>\n          </div>\n        </div>\n        <div class="row">\n          <!--licencje-->\n          <div class="span4">\n            <p><a href="http://www.ej-technologies.com/products/jprofiler/overview.html" target="_blank"><img src="img/partners/jprofiler.png" width="200"/></a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div id="about" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-about">\n  <div class="centered darkenBox">\n    <div class="container">\n      <div class="row darkenBox">\n        <div class="row">\n          <div class="span4">\n            <h1>czym jest Jinkubator?</h1>\n            <p>Są to cykliczne spotkania dla początkujących programistów Javy. Odbywają się one<b> w budynku Wydziału MIMUW na ulicy Banacha 2 w Warszawie, w godzinach 18:15-20:15.</b></p>\n          </div>\n          <div class="span4">\n            <h1>dla kogo?</h1>\n            <p>Dla wszystkich początkujących. W szczególności tych, którzy potrafią już napisać prostą aplikację w Javie, nie boją się pojęć polimorfizm i dziedziczenie, jednak nie znają technologii, bibliotek i okolic Javy. Dla wszystkich, którzy chcą tworzyć <b>dobry </b>kod.</p>\n          </div>\n          <div class="span4">\n            <h1>chcesz zostać prelegentem?</h1>\n            <p>To świetnie! Ciągle poszukujemy prelegentów na nadchodzące spotkania. Jeżeli czujesz się na siłach to  <a href="#/prelegents">tutaj </a>są szczegóły. </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="span6">\n            <h1>kim jesteśmy</h1>\n            <p>Jesteśmy inicjatywą stworzoną i prowadzoną przez <a href="http://www.warszawa.jug.pl">Warszawa JUG</a> specjalnie dla osób, które nie zebrały jeszcze dużego doświadczenia w Javie, a chciałyby mieć łatwiejszy start na rynku pracy lub po prostu poznać aktualnie używane technologie w trochę szerszym kontekście. Jeżeli tylko spodobał Ci się temat najbliższego spotkania to zapraszamy!</p>\n          </div>\n          <div class="span6">\n            <h1>najbliższe spotkanie</h1>\n            <h3><a href="#/meeting/16">16. Injectowanie od zera - wprowadzenie do Guice</a> -  <a href="#/prelegents/pawel_cesar_sanjuan_szklarz">Paweł Cesar Sanjuan Szklarz</a></h3>\n            <p>Termin: 11.06.2014 (wyjątkowo we środę!) godz. 18:15, Lokalizacja: MIMUW, s. 4060</p>\n          </div>\n        </div>\n      </div>\n      <div class="row fixedHeight"></div>\n      <div class="row darkenBox">     \n        <div class="row otherLogos">\n          <div class="span4">\n            <h1>chcesz więcej?</h1>\n            <div class="row">\n              <div class="span2"><a href="http://warszawa.jug.pl" target="_blank"><img src="img/partners/wjug.png"/></a></div>\n            </div>\n          </div>\n          <div class="span7">\n            <h1>nie tylko java?</h1>\n            <div class="row">\n              <div class="span3"><a href="http://pywaw.org" target="_blank"><img src="img/partners/otherGroups/pywaw.png" class="otherLogo"/></a></div>\n              <div class="span3"><a href="http://agilewarsaw.com" target="_blank"><img src="img/partners/otherGroups/agile_warsaw.png" class="otherLogo"/></a></div>\n            </div>\n            <div class="row">\n              <div class="span3"><a href="http://scalania.pl" target="_blank" id="scalania" class="text-center">Scalania</a></div>\n              <div class="span3"><a href="http://mobile-warsaw.pl" target="_blank"><img src="img/partners/otherGroups/mobile_warsaw.png"/></a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div id="cooperation" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background-cooperation">\n  <div class="centered darkenBox">\n    <div class="container">\n      <div class="row">\n        <div class="span12">\n          <h1>Współpraca</h1>\n          <p> Podobnie jak w przypadku regularnych spotkań grupy WJUG istnieje możliwość sponsorowania spotkania. W przypadku chęci współpracy w innej formie zachęcamy do zapoznania się z informacją na <a href="http://www.warszawa.jug.pl/#/cooperation">stronie WJUG</a>.</p>\n          <h2>sponsorowanie spotkania</h2>\n          <p>Przewidujemy możliwość prezentacji firmy-sponsora zainteresowanego reklamą, np. w celach rekrutacyjnych, przy otwarciu spotkania.  Sądzimy, że krótkie wprowadzenie o obszarach działalności firmy i jej oczekiwaniach rynkowych oraz ofert pracy znacząco zwiększa możliwości pozyskania wartościowych pracowników.</p>\n          <p>Zakładamy czas 10 minut, który w naszej ocenie jest wystarczający, aby przekazać właściwą dawkę wiedzy nt. firmy przy jednoczesnym utrzymaniu zainteresowania słuchaczy (którzy przede wszystkim przychodzą na spotkanie techniczne i mogliby źle wspominać je wyłącznie po przedłużającym się wstępie firmy).</p>\n          <p>Samo otwarcie spotkania jest częścią "pakietu" sponsorskiego. Udział sponsora jest ponadto nagradzany umieszczeniem jego logo i linka do strony domowej sponsora przy zapowiedzi spotkania, wliczając w to późniejsze archiwum spotkań.</p>\n          <p>Istnieje również możliwość rozdania ulotek firmowych sponsora podczas spotkania.</p>\n          <p>Zwracamy uwagę na tzw. "gęstość informacji". Z przyjemnością poświęcimy kilkanaście minut, żeby dowiedzieć się, czy w danej firmie warto pracować. Nie interesują nas roczne obroty firmy, ale czy ta informacja przekłada sie jakkolwiek na warunki pracy? Ważne są stawki, nadgodziny, czy w okolicy jest dobre jedzenie, czy w godzinach pracy mogę pójść do lekarza lub odebrac dziecko z przedszkola, jaki jest "WTF factor", narzędzia i metodologia pracy, czy mogę pracować z domu, ścieżka kariery, itp.</p>\n          <p>Zachęcamy do delegowania osób technicznych na nasze spotkania z czasem wystąpienia nie przekraczającym 10 minut.</p>\n          <p>W związku z tym, że nasze spotkania mają dość dobrze określoną grupę docelową prosimy o dostosowanie do niej zarówno ofert jak i sposobu ich prezentacji na początku spotkania.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div id="meetings" scroll-spy="scroll-spy" page="1" class="section background-meetings">\n  <div class="centered">\n    <div class="container">\n      <div class="row">\n        <div class="span12">\n          <h1>spotkania</h1>\n          <p>Aby być na bieżąco, zasubskrybuj nasz<a href="http://www.google.com/calendar/render?cid=7dmp09fjl82d57m3dgu4gj020g@group.calendar.google.com"> kalendarz</a> (wspólny z warszawskim JUGiem).</p>\n          <h3>Przed nami: </h3>\n          <p>11.06.2014 (wyjątkowo we środę!) - <a href="#/meeting/16">16. Injectowanie od zera - wprowadzenie do Guice</a> -  <a href="#/prelegents/pawel_cesar_sanjuan_szklarz">Paweł Cesar Sanjuan Szklarz</a></p>\n          <p>24.06.2014 - <a href="#/meeting/17">17. Spock - przyjemne testowanie</a> -  <a href="#/prelegents/dominik_przybysz">Dominik Przybysz</a></p>\n          <p>01.07.2014 - Walne spotkanie WJUG - wszyscy zainteresowani</p>\n        </div>\n      </div>\n      <div class="row">\n        <div class="span12">\n          <h3>Za nami:</h3>\n          <p>27.05.2014 - <a href="#/meeting/15">15. Monitorowanie aplikacji</a> -  <a href="#/prelegents/tomasz_nurkiewicz">Tomasz Nurkiewicz</a></p>\n          <p>13.05.2014 - <a href="#/meeting/14">14. A journey in MongoDB land</a> -  <a href="#/prelegents/tugdual_grall">Tugdual Grall</a></p>\n          <p>29.04.2014 - <a href="#/meeting/13">13. JPA 2.0 cz. II</a> -  <a href="#/prelegents/rafal_nagrodzki">Rafał Nagrodzki</a></p>\n          <p>15.04.2014 - <a href="#/meeting/12">12. Code metrics</a> -  <a href="#/prelegents/adam_dubiel">Adam Dubiel</a></p>\n          <p>01.04.2014 - <a href="#/meeting/11">11. Clean code</a> -  <a href="#/prelegents/michal_lipski">Michał Lipski</a></p>\n          <p>18.03.2014 - <a href="#/meeting/10">10. JPA 2.0 cz. I</a> -  <a href="#/prelegents/rafal_nagrodzki">Rafał Nagrodzki</a></p>\n          <p>04.03.2014 - <a href="#/meeting/9">9. Spring Framework</a> -  <a href="#/prelegents/jakub_nabrdalik">Jakub Nabrdalik</a></p>\n          <p>18.02.2014 - <a href="#/meeting/8">8. Mockito - biblioteka do mockowania</a> -  <a href="#/prelegents/marcin_zajaczkowski">Marcin Zajączkowski</a></p>\n          <p>04.02.2014 - <a href="#/meeting/7">7. Podstawy testowania</a> -  <a href="#/prelegents/adam_pierzchala">Adam Pierzchała</a></p>\n          <p>21.01.2014 - <a href="#/meeting/6">6. Kariera programisty</a> -  wielu prelegentów</p>\n          <p>07.01.2014 - <a href="#/meeting/5">5. Guava - JDK na sterydach</a> -  <a href="#/prelegents/piotr_betkier">Piotr Betkier</a></p>\n          <p>10.12.2013 - <a href="#/meeting/4">4. IDE</a> -  <a href="#/prelegents/jakub_kubrynski">Jakub Kubryński</a>,  <a href="#/prelegents/krzysztof_nielepkowicz">Krzysztof Nielepkowicz</a></p>\n          <p>26.11.2013 - <a href="#/meeting/3">3. GIT - krok po kroku</a> -  <a href="#/prelegents/michal_lewandowski">Michał Lewandowski</a></p>\n          <p>12.11.2013 - <a href="#/meeting/2">2. Podstawy warsztatu projektowego</a> - <a href="#/prelegents/adam_chudzik">Adam Chudzik </a></p>\n          <p>29.10.2013 - <a href="#/meeting/1">1. Łagodne wprowadzenie do Mavena</a> - <a href="#/prelegents/arkadiusz_konior">Arkadiusz Konior</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div id="partners" scroll-spy="scroll-spy" page="1" class="section background-partners">\n  <div class="centered">\n    <div class="container">\n      <div class="row">\n        <div class="span12">\n          <h1>Partnerzy grupy</h1>\n        </div>\n      </div>\n      <div class="row">\n        <!--naukowi-->\n        <div class="span4">\n          <p><img src="img/partners/mimuw-logo.png" width="200"/></p>\n        </div>\n      </div>\n      <div class="row">\n        <!--licencje-->\n        <div class="span4">\n          <p><a href="http://www.ej-technologies.com/products/jprofiler/overview.html" target="_blank"><img src="img/partners/jprofiler.png" width="200"/></a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>1 Spotkanie</h4>\n            <h2>Łagodne wprowadzenie do Maven</h2>\n            <h3>Arkadiusz Konior</h3>\n            <p>Termin: 29.10.2013, 18:00</p>\n            <p>Lokalizacja: s. 3180 MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Opowiem o tym czym jest maven, jak go zainstalować i używać. Pokażę jak kompilować, testować i budować projekty javowe przy użyciu mavena. Omówię budowę pliku pom.xml, cykl życia, opis i mechanizm zależności (group, artifact, version, classifier), ściąganie zależności i przechowywanie ich na dysku. Ponadto będzie można posłuchać o strukturze katalogowej projektu, lokalnych i zdalnych repozytoriach, archetypach, profilach i pluginach (dodawanie, konfiguracja).\n            <h3>O prelegencie:</h3>\n            <p>Z wykształcenia matematyk, obecnie programista Groovy z 7-letnim doświadczeniem w Javowych technologiach. Przekonany i stosujący się do zasad TDD. Obecnie pracuje nad open-sourcowym, opartym o gradle, build systemem dla aplikacji mobilnych. Zawodowo związany z firmą Polidea. Na tegorocznej Warsjawie prowadził szkolenie z gradle.</p>\n            <h3>Po spotkaniu</h3>\n            <p>Slajdy ze spotkania można znaleźć <a href="https://docs.google.com/presentation/d/1U5voCuGQL3ChZLP54FjGnn4PrQDlJV6KFCNim7vADqA/edit#slide=id.p" target="_blank">tutaj</a>.</p>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/z0Q3SepVgEE" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>10 Spotkanie</h4>\n            <h2>JPA 2.0 cz. I</h2>\n            <h3>Rafał Nagrodzki</h3>\n            <p>Termin: 18.03.2014, g.18:15</p>\n            <p>Lokalizacja: MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Co prawda obecnie mamy do czynienia z bardzo prężnym rozwojem w dziedzinie nierelacyjnych baz danych (ruch NoSQL), jednak systemy relacyjne stanowią wciąż silnie zakorzeniony standard. Dostęp do danych relacyjnych w tradycyjny sposób odbywa się poprzez ręczne opracowywanie schematu bazy oraz tworzenie zapytań. Jest to niestety proces dość pracochłonny, żmudny i kłopotliwy w utrzymaniu, zwłaszcza gdy aplikacja się rozrasta. Dlatego warto zainteresować się narzędziami typu ORM, które starają się nam przyjść z pomocą poprzez zautomatyzowanie mapowania między światem obiektowym i relacyjnym. Popularność koncepcji ORM zaowocowała zestandaryzowaniem Javowego API obsługującego trwałość w postaci specyfikacji JPA (Java Persistence API). W ramach prezentacji postaram się dokonać przeglądu JPA oraz zasygnalizować pewne typowe problemy, które można napotkać podczas pisania aplikacji korzystającej z JPA. \n            <h3>O prelegencie:</h3>\n            <p>Pracownik Działu Sieci Komputerowych Uniwersytetu Warszawskiego. Zawodowo zajmuje się integracją systemów, aplikacjami webowymi oraz zagadnieniami związanymi z zarządzaniem tożsamością. Zwolennik Springa oraz oprogramowania rozwijanego pod egidą Apache Software Foundation. Zainteresowany najróżniejszymi zakamarkami ekosystemu Javy przy dość potężnej rozpiętości od ciężkich biznesowych standardów przez frameworki znajdujące zastosowanie w większości aplikacji po współbieżność czy zagadnienia związane z JVM.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>11 Spotkanie</h4>\n            <h2>Clean Code</h2>\n            <h3>Michał Lipski</h3>\n            <p>Termin: 01.04.2014, g.18:15</p>\n            <p>Lokalizacja: MIMUW</p>\n            <p>Sponsor: <a href="http://pragmatists.pl" target="_blank"><img src="img/sponsors/pragmatists.png" width="200"/></a></p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Pisanie dobrego kodu to ciężka praca. Potrzeba do tego nie tylko wiedzy o zasadach i paternach. Potrzeba wytrwałości, samozaparcia i wypracowania dobrych nawyków. Tego drugiego nie da się nauczyć - trzeba to "wypocić" pracując nad kodem. \n            <p>Na warsztacie kodując wspólnie z uczestnikami skupimy się na zdobyciu tego pierwszego, czyli wiedzy o praktykach tworzenia dobrego kodu w Javie. Na przykładach omówimy zasady, wzorce i najlepsze praktyki pisania czystego kodu. Dowiemy się co to znaczy: DRY, SOLID, KISS, Tell, Don\'t Ask oraz kilka innych ważnych dla programisty zasad.</p>\n            <h3>O prelegencie:</h3>\n            <p>Doświadczony programista Java i JEE. Entuzjasta technologii open source i metodologii agile. Na co dzień doskonali swój warsztat praktykując TDD i Pair Programming w firmie Pragmatists.</p>\n            <h3>Po spotkaniu</h3>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/nx6OZE8Vx3o" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>12 Spotkanie</h4>\n            <h2>Code Metrics</h2>\n            <h3>Adam Dubiel</h3>\n            <p>Termin: 15.04.2014, g.18:15</p>\n            <p>Lokalizacja: MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Co to jest Sonar? Do czego przydaje się złożoność cyklometryczna i LCOM4? Właściwie czemu cykle w pakietach są złe? To akurat te prostsze pytania, na które postaram się odpowiedzieć. O wiele trudniejsze jest dobre interpretowanie i stosowanie wskazówek, jakie dostajemy od narzędzi analizujących nasz kod. A może w ogóle kodu nie da się "zmierzyć"? Gdzie jest granica między pomiarami, które nam pomagają a pompowaniem statystyk?\n            <p>W ramach prelekcji chciałbym opowiedzieć o popularnych metrykach kodu, na przykładach pokazać jak stosować je w praktyce i porozmawiać o tym, jak nie dać się zwariować z pomiarami.</p>\n            <h3>O prelegencie:</h3>\n            <p>Programowaniem pasjonuje się od dekady, od kilku lat jego dzień dzieli się na programowanie w pracy i programowanie po pracy. Często uważa, że "to da się zrobić lepiej" i na swoje nieszczęście nie ustaje w poszukiwaniach tego "lepiej". </p>\n            <p>Obecnie programista w Allegro, na co dzień programuje w Java i JavaScript. Cały wolny czas pożera mu rozwój projektów OpenSource.</p>\n            <h3>Po spotkaniu</h3>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/oNa5Q8VwB0w" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>13 Spotkanie</h4>\n            <h2>JPA 2.0 cz. II</h2>\n            <h3>Rafał Nagrodzki</h3>\n            <p>Termin: 29.04.2014, g.18:15</p>\n            <p>Lokalizacja: MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Co prawda obecnie mamy do czynienia z bardzo prężnym rozwojem w dziedzinie nierelacyjnych baz danych (ruch NoSQL), jednak systemy relacyjne stanowią wciąż silnie zakorzeniony standard. Dostęp do danych relacyjnych w tradycyjny sposób odbywa się poprzez ręczne opracowywanie schematu bazy oraz tworzenie zapytań. Jest to niestety proces dość pracochłonny, żmudny i kłopotliwy w utrzymaniu, zwłaszcza gdy aplikacja się rozrasta. Dlatego warto zainteresować się narzędziami typu ORM, które starają się nam przyjść z pomocą poprzez zautomatyzowanie mapowania między światem obiektowym i relacyjnym. Popularność koncepcji ORM zaowocowała zestandaryzowaniem Javowego API obsługującego trwałość w postaci specyfikacji JPA (Java Persistence API). W ramach prezentacji postaram się dokonać przeglądu JPA oraz zasygnalizować pewne typowe problemy, które można napotkać podczas pisania aplikacji korzystającej z JPA. \n            <h3>O prelegencie:</h3>\n            <p>Pracownik Działu Sieci Komputerowych Uniwersytetu Warszawskiego. Zawodowo zajmuje się integracją systemów, aplikacjami webowymi oraz zagadnieniami związanymi z zarządzaniem tożsamością. Zwolennik Springa oraz oprogramowania rozwijanego pod egidą Apache Software Foundation. Zainteresowany najróżniejszymi zakamarkami ekosystemu Javy przy dość potężnej rozpiętości od ciężkich biznesowych standardów przez frameworki znajdujące zastosowanie w większości aplikacji po współbieżność czy zagadnienia związane z JVM.</p>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/7pEdaSVBwxU" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>14 Spotkanie</h4>\n            <h2>A journey in MongoDB land</h2>\n            <h3>Tugdual Grall</h3>\n            <p>Termin: 13.05.2014, g. 18:15</p>\n            <p>Lokalizacja: Gamma Factory</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>During this interactive presentation Tug will present the reasons why MongoDB has been created and the benefits of a document oriented database. The session will be a mix of presentation, demonstration and Q&A that will allow developer to get a better idea what is MongoDB, but also when it is a good idea to use it.\n            <p></p>Tug will discuss the key features of MongoDB, from the easy installation, deployment options, the query language and how to do real time analytics with the aggregation framework. Depending of the time and the interest we can also dive into some other nice features such as the GeoSpatial capabilities or the new Full Text Search.\n            <h3>O prelegencie:</h3>\n            <p></p>Tugdual Grall aka "Tug" is a Technical Evangelist at MongoDB, an open source advocate and a passionate developer. He currently works with the European developer communities and MongoDB Partners to ease the NoSQL adoption.\n            <p></p>Tugdual is Co-Founder of the Nantes JUG (Java User Group) that holds since 2008 monthly meeting about Java ecosystem. Tugdual also writes a blog available at <a href="http://tugdualgrall.blogspot.com">http://tugdualgrall.blogspot.com </a>and is available <a href="http://twitter.com/tgrall">@tgrall</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>15 Spotkanie</h4>\n            <h2>Monitorowanie aplikacji</h2>\n            <h3>Tomasz Nurkiewicz</h3>\n            <p>Termin: 27.05.2014</p>\n            <p>Lokalizacja: MiM UW, s. 3180</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Podczas prezentacji zapoznamy się z metodami logowania przebiegu pracy naszej aplikacji w Javie. Wyjdziemy od System.out.println() by skończyć na Logbacku i Log4J. Poznamy dobre praktyki, pomocne skrypty i przydatne sztuczki. Szczególny nacisk położymy na logowanie błędów.\n            <p></p>W drugiej części, gdy już nauczymy się jak poprawnie logować działanie naszego kodu, skupimy się na nieocenionych i znienawidzonych jednocześnie... śladach stosu (""stack traces""). Sztuka ich czytania to jedna z najcenniejszych umiejętności podczas poszukiwania źródeł błędów. Zobaczymy wreszcie jak rzut oka na ślad stosu wszystkich wątków pomaga zrozumieć stan naszej aplikacji.\n            <h3>O prelegencie:</h3>\n            <p></p>Na programowaniu spędził już połowę życia, od 6 lat zawodowo w Javie. Uwielbia back-end, toleruje JavaScript. Pasjonat Springa i języków około-Javowych. Rozczarowany jakością tworzonego oprogramowania (jakże często swojego!), nie znosi długich metod i ukrytych efektów ubocznych. Zakochany w wykresach, analizie danych i raportowaniu. Redaktor techniczny książek "Learning Highcharts" oraz "Getting started with IntelliJ IDEA". Uważa, że komputery wymyślono by programiści mogli automatyzować powtarzalne i nudne zadania. Także własne.\n            <p></p>Na co dzień programuje funkcyjnie dla sektora finansowego. Członek zespołu scala.net.pl, zaangażowany w open source. Wyróżniony DZone\'s Most Valuable Blogger, niegdyś aktywny na StackOverflow, najlepszy prelegent tegorocznej Confitury według uczestników. Lubi programować.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>16 Spotkanie</h4>\n            <h2>Injectowanie od zera - wprowadzenie do Guice</h2>\n            <h3>Paweł Cesar Sanjuan Szklarz</h3>\n            <p>Termin: 11.06.2014, wyjątkowo spotykamy się we środę!</p>\n            <p>Lokalizacja: MiM UW, s. 4060</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Przedstawimy wstrzykiwanie zależności (DI) w ujęciu biblioteki Guice, ale celem prezentacji jest zrozumienia na czym polega DI, tak, żeby swobodnie użyć każdego frameworku.\n            <p></p>Zaczniemy od zrozumienia, jaki problem rozwiązujemy używająć DI. Pożniej poznamy podstawowe konstrukcje z Guice i zrobimy proste testy. Porównamy, jak zrobić to samo używając Springa. Następnie zaczniemy używać coraz bardziej zaawansowanych narzędzi: Providers, PrivateModule, Scope, SPI, etc.\n            <h3>O prelegencie:</h3>\n            <p></p>Na programowaniu spędził już połowę życia, od 6 lat zawodowo w Javie. Uwielbia back-end, toleruje JavaScript. Pasjonat Springa i języków około-Javowych. Rozczarowany jakością tworzonego oprogramowania (jakże często swojego!), nie znosi długich metod i ukrytych efektów ubocznych. Zakochany w wykresach, analizie danych i raportowaniu. Redaktor techniczny książek "Learning Highcharts" oraz "Getting started with IntelliJ IDEA". Uważa, że komputery wymyślono by programiści mogli automatyzować powtarzalne i nudne zadania. Także własne.\n            <p></p>Na co dzień programuje funkcyjnie dla sektora finansowego. Członek zespołu scala.net.pl, zaangażowany w open source. Wyróżniony DZone\'s Most Valuable Blogger, niegdyś aktywny na StackOverflow, najlepszy prelegent tegorocznej Confitury według uczestników. Lubi programować.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>17 Spotkanie</h4>\n            <h2>Spock</h2>\n            <h3>Dominik Przybysz</h3>\n            <p>Termin: 24.06.2014</p>\n            <p>Lokalizacja: MiM UW, s. 3180</p>\n            <!-- h3 O prezentacji:-->\n            <!-- p -->\n            <!-- | Przedstawimy wstrzykiwanie zależności (DI) w ujęciu biblioteki Guice, ale celem prezentacji jest zrozumienia na czym polega DI, tak, żeby swobodnie użyć każdego frameworku.-->\n            <!-- p-->\n            <!-- | Zaczniemy od zrozumienia, jaki problem rozwiązujemy używająć DI. Pożniej poznamy podstawowe konstrukcje z Guice i zrobimy proste testy. Porównamy, jak zrobić to samo używając Springa. Następnie zaczniemy używać coraz bardziej zaawansowanych narzędzi: Providers, PrivateModule, Scope, SPI, etc.-->\n            <!-- h3 O prelegencie:-->\n            <!-- include ../prelegent/tomasz_nurkiewicz-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>2 Spotkanie</h4>\n            <h2>Podstawy warsztatu projektowego</h2>\n            <h3>Adam Chudzik</h3>\n            <p>Termin: 12.11.2013, 18:15</p>\n            <p>Lokalizacja: s. 5440 MIMUW</p>\n            <h3>O prezentacji:</h3>\n            <p>Jako świeży deweloper trafiasz do nowego projektu i poza istniejącym kodem spada na Ciebie grad nazw, o których nikt nie wspominał na studiach:\n              <ul>\n                <li>git</li>\n                <li>gerrit</li>\n                <li>\n                   \n                  maven\n                </li>\n                <li>\n                   \n                  Jenkins\n                </li>\n              </ul>\n            </p>\n            <p>Na tej prezentacji postaram się oswoić powyższe pojęcia, pokazać podstawy pracy z współczesnym tymi narzędziami i rozwiązania dla typowych na początku problemów.</p>\n            <h3>O prelegencie:</h3>\n            <p>Adam Chudzik jest pracownikiem Działu Sieci Komputerowych (DSK) Uniwersytetu Warszawskiego. Za dnia dłubie w Javie, po zmroku nad (jak ma nadzieję) Kolejną-Wielką-Rzeczą!:) Adept Agile i Software Craftsmanship.</p>\n            <h3>Po spotkaniu</h3>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/fq8DOKrTIh0" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>3 Spotkanie</h4>\n            <h3>GIT - krok po kroku</h3>\n            <h3>Michał Lewandowski</h3>\n            <p>Termin: 26.11.2013, 18:15</p>\n            <p>Lokalizacja: MIMUW, s. 3180</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Bez systemu kontroli wersji ciężko dzisiaj pracować. Na tym spotkaniu JInkubatora przedstawię jeden z kilku systemów kontroli wersji jakim jest git. Będzie to warsztat w stylu od zera do bohatera. Zaczniemy od narzędzi jakie przydają się podczas pracy z git\'em, następnie przejdziemy przez podstawowe operacje i dojdziemy do troszeczkę zawansowanych czynności, a zakończymy na git flow.\n            <p>Warsztat będzie się składał z kroków:\n              <ul>\n                <li>tools</li>\n                <li>init</li>\n                <li>local add, commit</li>\n                <li>what add means ?</li>\n                <li>git interlnals</li>\n                <li>git show</li>\n                <li>shortcuts</li>\n                <li>amend</li>\n                <li>unstage</li>\n                <li>unmodifing</li>\n                <li>tag</li>\n                <li>stash</li>\n                <li>bare repo</li>\n                <li>remotes</li>\n                <li>clone</li>\n                <li>branch</li>\n                <li>merge</li>\n                <li>diff</li>\n                <li>clean-up</li>\n                <li>fetch</li>\n                <li>rebase</li>\n                <li>configs</li>\n                <li>ignores</li>\n                <li>reflogs</li>\n                <li>interactive-rebase</li>\n                <li>bisect</li>\n                <li>revert</li>\n                <li>cherry-pick</li>\n                <li>gitflow</li>\n              </ul>\n            </p>\n            <h3>O prelegencie:</h3>\n            <p>Michał Lewandowski - pracuje w jedynej słusznej (jego zdaniem) firmie, czyli w TouK. Świeżo upieczony absolwent. Na codzień developuje w Javie, z odchyłami w kierunku Grooviego. Po godzinach ciągnie go trochę w kierunku Scali, ale też poza JVM\'a. Intrygują go też wszystkie te Adżajlowe praktyki. Zwolennik (ale nie fanatyk) systemu z nadgryzionym jabłkiem, ale wróg JaTelefonów. Jak nie siedzi przy komputerze, ogląda się za dziełami sztuki w formie klasycznej motoryzacji.</p>\n            <h3>Po spotkaniu</h3>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/QrJ5cdX1ir4" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>4 Spotkanie</h4>\n            <h2>IDE</h2>\n            <h3>Jakub Kubryński, Krzysztof Nielepkowicz</h3>\n            <p>Termin: 10.12.2013 18:15</p>\n            <p>Lokalizacja: MIMUW, s. 5440</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Gdyby rzeźbiarz nie potrafił posługiwać się dłutem, ciężko byłoby mu tworzyć dzieła sztuki - byłoby to zupełnie niemożliwe lub pochłaniało ogrom czasu. Podobna sytuacja w świecie programistów dotyczy naszej znajomości narzędzi choćby takich jak IDE. Na spotkaniu pokażemy czemu dobra znajomość środowiska pracy jest taka istotna i na których funkcjonalnościach powinni skupiać się początkujący programiści, żeby maksymalnie podnieść swoją efektywność i nie tracić czasu na niepotrzebne elementy. Zobaczymy też jak od strony praktycznej wygląda codzienne posługiwanie się IntelliJIDEA oraz Eclipse.\n            <h3>O prelegentach:</h3>\n            <h4>Jakub Kubryński</h4>\n            <p>Zawodowo związany z PayU z ramienia którego buduje ogniwo rozwojowe w Warszawie (trzecia głowa smoka). Prywatnie czuje się mocno przywiązany do pakietu java.util.concurrent i klasy sun.misc.Unsafe. Poza tym pasjonują go lekkie aplikacje, w których stosunek kodu do dostarczanej funkcjonalności jest jak najmniejszy.</p>\n            <h4>Krzysztof Nielepkowicz</h4>\n            <p>Z zamiłowania jestem fotografem oraz.... programistą. Nie przepuszczę żadnej okazji by fotografować, robię dużo dobrych zdjęć, które mają ducha i przesłanie. Lubię również programować, ostatnio nawet podczas podróży pociągiem do pracy wyciągam laptopa i programuję lub czytam o programowaniu. 18 lipca roku Pańskiego 2012 urodziła mi się córeczka, skutecznie konkuruje z moimi pasjami, stała się także moją główną modelką - nic dziwnego bo jest najładniejsza i najmądrzejsza ze wszystkich dzieci. Gdy śpi moja córa, siadam do programowania - czasem Java a ostatnio częściej C#, oba języki są bardzo przyjemne,  albo do obróbki zdjęć. Dziwnym trafem z zawodu jestem programistą i.... lubię swoją pracę :)</p>\n            <h3>Po spotkaniu</h3>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/boqTsXTeTRU" frameborder="0" allowfullscreen></iframe>\n            </p>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/HkU_aLIUQJE" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>5 Spotkanie</h4>\n            <h2>Guava - JDK na sterydach</h2>\n            <h3>Piotr Betkier</h3>\n            <p>Termin: 7.01.2014 18:15</p>\n            <p>Lokalizacja: MIMUW, s. 5440</p>\n            <p>Sponsor: <a href="http://decerto.pl/kariera" target="_blank"><img src="img/sponsors/decerto.png" width="200"/></a></p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Java, pomimo wielu niewątpliwych zalet, jest językiem dość prymitywnym z kiepskim API w wielu miejscach JDK. Z odsieczą przychodzi Guava, biblioteka od Googla, która dodaje brakujące mechanizmy i pozwala pisać zwięzły i przejrzysty kod. Jest to aktualnie niezbędnik w arsenale każdego programisty Javowego.\n            <p>W ramach warsztatów pokażę jakie możliwości daje Guava i jakie problemy rozwiązuje. Między innymi refaktoryzować będziemy przerośnięty kod napisany w czystym JDK do czystszej postaci z wykorzystaniem Guavy.</p>\n            <h3>O prelegencie:</h3>\n            <p>Na co dzień tworzy internet w Grupie Allegro, wcześniej wspierał poszukiwania bozonu Higgsa rozwijając oprogramowanie do monitorowania akceleratorów w CERN. Urodzony perfekcjonista, nauczony pragmatyk. Godzi zainteresowanie światem Pythona i Javy. W ramach odskoczni od IT uwielbia aktywny wypoczynek pod każdą postacią.</p>\n            <h3>Po spotkaniu</h3>\n            <p>Kod ze spotkania dostępny jest w  <a href="https://github.com/pbetkier/guava-workshops" target="_blank">repozytorium</a>, a pretentacja  <a href="img/slides/piotr_betkier_guava.pdf">tutaj</a>.</p>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/SmH53AacbUI" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>6 Spotkanie</h4>\n            <h2>Kariera programisty</h2>\n            <h3>wielu prelegentów</h3>\n            <p>Termin: 21.01.2014 18:15</p>\n            <p>Lokalizacja: MIMUW, s. 3180</p>\n            <h3>O prezentacji:</h3>\n            <p> </p> Zastanawiałeś się jak pokierować swoją karierę? Co warto zrobić a co jest marnotrawstwem czasu? Jak się uczyć i czego? Jaka praca będzie najlepsza w dłuższej perspektywie?\n            <p> </p> Ponieważ nie ma prostych odpowiedzi na te pytania, planujemy zrobić spotkanie na którym wystąpi kilku doświadczonych programistów o różnych profilach, np.:\n            <ul>\n              <li>Jedna firma od początku</li>\n              <li>Tylko korporacje</li>\n              <li>Same małe firmy</li>\n              <li>Startupy</li>\n              <li>etc..</li>\n            </ul>\n            <p>Na spotkaniu opowiedzą nam oni o rozwoju swojej kariery.</p>\n            <p>Cel jest taki, żeby dzielić się doświadczeniem i zaplanować karierę na swoją miarę.</p>\n            <h3>O prelegencie:</h3>\n            <p>Polak-Meksykanin, Matematyk z wykształcenia. Interesuję się programowaniem funkcyjnym i metodami formalnymi.</p>\n            <h3>Goście:</h3>\n            <ul>\n              <li>Zbigniew Szymanski</li>\n              <li>Damian Szczepanik</li>\n              <li>Robert Szarejko</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>7 Spotkanie</h4>\n            <h2>Podstawy testowania</h2>\n            <h3>Adam Pierzchała</h3>\n            <p>Termin: 4.02.2014 18:15</p>\n            <p>Lokalizacja: MIMUW, s. 5440</p>\n            <p>Sponsor: <a href="http://pragmatists.pl" target="_blank"><img src="img/sponsors/pragmatists.png" width="200"/></a></p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Chcesz mieć pewność, że Twój zachowuje się poprawnie? Chcesz aby sprawdzenie, czy nowa funkcjonalność działa nie wymagało przebudowania i uruchomienia całej aplikacji, a zamiast tego trwało kilka sekund? Przyjdź na to spotkanie, a nauczysz się pisać testy, które sprawią, że wprowadzanie zmian do kodu nie będzie się wiązało z bólami głowy i obawą, że się psuje się zachowania w zupełnie innej części systemu. Podczas spotkania będziecie mieli szansę zapoznać się z koncepcjami testów jednostkowych i integracyjnych, mockowania, TDD, oraz podstawowymi bibliotekami do testowania - junit i testng, a jeśli wystarczy czasu - podstawy mockito.\n            <h3>O prelegencie:</h3>\n            <p>Jestem Software Developerem w firmie Pragmatists, gdzie na co dzień pracuję stosując zwinne techniki, w tym choćby TDD i Pair Programming. Po godzinach realizuję szalone pomysły związane z automatycznym generowaniem wirtualnych terenów, tworzeniem gier i podbijaniem świata.</p>\n            <h3>Po spotkaniu</h3>\n            <p>Kod ze spotkania dostępny jest w  <a href="https://bitbucket.org/apierzch/testing-workshop/src" target="_blank">repozytorium</a>, a pretentacja  <a href="http://prezi.com/v93wevd05trm/testowanie-aplikacji-java/?utm_campaign=share&amp;utm_medium=copy">tutaj</a>.</p>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/dwNVYrMRFDE" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>8 Spotkanie</h4>\n            <h2>Mockito - biblioteka do mockowania</h2>\n            <h3>Marcin Zajączkowski</h3>\n            <p>Termin: 18.02.2014, g. 18:15</p>\n            <p>Lokalizacja: MIMUW, s. 3180</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Bez automatycznych testów jednostkowych bardzo trudno (niemożliwe?) jest zapewnić wysoką jakość tworzonego oprogramowania. Aby testy nie zaczęły nam bardziej przeszkadzać niż pomagać muszą być być łatwe w utrzymaniu, pokrywać możliwie dużo kodu produkcyjnego i jednocześnie bardzo szybko działać. Krótki czas wykonywania najłatwiej uzyskać badając w danym teście tylko wybraną odpowiedzialność jednej klasy. Współpracujące klasy są zastępowane przez dublerów (ang. test doubles), nad którymi sprawujemy pełną kontrolę. Aby robić to efektywnie potrzebne jest dobre narzędzie. I tu na scenę wchodzi Mockito - (IMHO) najlepsza biblioteka do mockowania dla aplikacji napisanych w Javie. \n            <h3>O prelegencie:</h3>\n            <p>Doświadczony programista i architekt od ponad 8 lat zawodowo zajmujący się tworzeniem oprogramowania. Specjalizuje się w budowaniu wysokiej jakości rozwiązań w oparciu o idee ruchu Software Craftsmanship z wykorzystaniem technik związanych z automatycznym testowaniem kodu (jak Test-Driven Development, czy Continuous Integration).</p>\n            <p>Oprócz codziennego wykorzystywania swojej wiedzy w realizowanych projektach prowadzi szkolenia oraz mentoring zespołów pokazując jak można tworzyć czytelny, testowalny i łatwy w utrzymaniu kod. Dodatkowo prelegent na konferencjach, ekspert techniczny podczas publicznych warsztatów oraz prowadzący zajęcia ze studentami.</p>\n            <p>Z zamiłowania entuzjasta wolnego oprogramowania, szczególnie powiązanego z Linuksem oraz autor i kontrybutor projektów FOSS. Od czasu do czasu bloguje o <a href="http://blog.solidsoft.info/">dobrym kodzie</a>.</p>\n            <h3>Po spotkaniu</h3>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/Vi59SCVY0_M" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <h4>9 Spotkanie</h4>\n            <h2>Spring Framework</h2>\n            <h3>Jakub Nabrdalik</h3>\n            <p>Termin: 04.03.2014, g. 18:15</p>\n            <p>Lokalizacja: MIMUW,</p>\n            <h3>O prezentacji:</h3>\n            <p> </p>Spring Framework jest najpopularniejszym frameworkiem w świecie JVM\'a. To znaczy że w ogłoszeniach o pracę w Javie, pojawia się częściej niż cokolwiek innego. I bardzo dobrze, bo w świecie rozwiązań słabych, średnich i dobrych, Spring Framework od wielu lat należy do czołówki najlepszych. Starczy powiedzieć, że nie znam publicznych bibliotek lepiej napisanych niż Spring Framework (patrząc na jakość kodu, prostotę, czytelność, konfigurowalność, nieinwazyjność).\n            <p>W ramach WJUG\'a prowadzone są cykliczne warsztaty (http://www.meetup.com/Warsaw-Spring-Labs) ze Springa dla początkujących.</p>\n            <p>Ale co jeśli nie masz czasu? Co jeśli nie wiesz czy Spring jest biblioteką, którą potrzebujesz? Co jeśli nie wiesz, do czego miałby Ci się przydać? I dlaczego miałbyś się tego uczyć?</p>\n            <p>Jeśli nic nie wiesz o Springu, to spotkanie jest właśnie dla Ciebie. Pokażę jak wygląda programowanie ze Springiem, omówię podstawowe koncepcje (DI, AOP), pokażę kilka często wykorzystywanych modułów.</p>\n            <p>Po wyjściu ze spotkania, powinieneś już wiedzieć kiedy i do czego przyda Ci się Spring, a także wiedzieć jak go ogólnie użyć. Będzie czas na zadawanie pytań i porady praktyczne. Będzie lekko, łatwo i mam nadzieję, przyjemnie.</p>\n            <p>Zapraszam.</p>\n            <h3>O prelegencie:</h3>\n            <p>Developer, architekt, analityk, team leader, coach, project manager, współorganizator Warszawa Java User Group, Spring Labs, Warsaw Groovy User Group, współautor książki "Spring Security Starter", okazjonalnie speaker. Szczegóły: <a href="http://solidcraft.eu/">solidcraft.eu</a></p>\n            <h3>Po spotkaniu</h3>\n            <p>\n               \n              <iframe width="853" height="480" src="http://www.youtube.com/embed/RQEsSCwsRf0" frameborder="0" allowfullscreen></iframe>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
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
buf.push('\n<p>Programowaniem pasjonuje się od dekady, od kilku lat jego dzień dzieli się na programowanie w pracy i programowanie po pracy. Często uważa, że "to da się zrobić lepiej" i na swoje nieszczęście nie ustaje w poszukiwaniach tego "lepiej". </p>\n<p>Obecnie programista w Allegro, na co dzień programuje w Java i JavaScript. Cały wolny czas pożera mu rozwój projektów OpenSource.</p>');
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
buf.push('\n<p>Developer, architekt, analityk, team leader, coach, project manager, współorganizator Warszawa Java User Group, Spring Labs, Warsaw Groovy User Group, współautor książki "Spring Security Starter", okazjonalnie speaker. Szczegóły: <a href="http://solidcraft.eu/">solidcraft.eu</a></p>');
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
buf.push('\n<p>Michał Lewandowski - pracuje w jedynej słusznej (jego zdaniem) firmie, czyli w TouK. Świeżo upieczony absolwent. Na codzień developuje w Javie, z odchyłami w kierunku Grooviego. Po godzinach ciągnie go trochę w kierunku Scali, ale też poza JVM\'a. Intrygują go też wszystkie te Adżajlowe praktyki. Zwolennik (ale nie fanatyk) systemu z nadgryzionym jabłkiem, ale wróg JaTelefonów. Jak nie siedzi przy komputerze, ogląda się za dziełami sztuki w formie klasycznej motoryzacji.</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>Doświadczony programista Java i JEE. Entuzjasta technologii open source i metodologii agile. Na co dzień doskonali swój warsztat praktykując TDD i Pair Programming w firmie Pragmatists.</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>Używam od 5 lat Guice produkcyjnie.</p>');
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
buf.push('\n<p>Pracownik Działu Sieci Komputerowych Uniwersytetu Warszawskiego. Zawodowo zajmuje się integracją systemów, aplikacjami webowymi oraz zagadnieniami związanymi z zarządzaniem tożsamością. Zwolennik Springa oraz oprogramowania rozwijanego pod egidą Apache Software Foundation. Zainteresowany najróżniejszymi zakamarkami ekosystemu Javy przy dość potężnej rozpiętości od ciężkich biznesowych standardów przez frameworki znajdujące zastosowanie w większości aplikacji po współbieżność czy zagadnienia związane z JVM.</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p></p>Na programowaniu spędził już połowę życia, od 6 lat zawodowo w Javie. Uwielbia back-end, toleruje JavaScript. Pasjonat Springa i języków około-Javowych. Rozczarowany jakością tworzonego oprogramowania (jakże często swojego!), nie znosi długich metod i ukrytych efektów ubocznych. Zakochany w wykresach, analizie danych i raportowaniu. Redaktor techniczny książek "Learning Highcharts" oraz "Getting started with IntelliJ IDEA". Uważa, że komputery wymyślono by programiści mogli automatyzować powtarzalne i nudne zadania. Także własne.\n<p></p>Na co dzień programuje funkcyjnie dla sektora finansowego. Członek zespołu scala.net.pl, zaangażowany w open source. Wyróżniony DZone\'s Most Valuable Blogger, niegdyś aktywny na StackOverflow, najlepszy prelegent tegorocznej Confitury według uczestników. Lubi programować.');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p></p>Tugdual Grall aka "Tug" is a Technical Evangelist at MongoDB, an open source advocate and a passionate developer. He currently works with the European developer communities and MongoDB Partners to ease the NoSQL adoption.\n<p></p>Tugdual is Co-Founder of the Nantes JUG (Java User Group) that holds since 2008 monthly meeting about Java ecosystem. Tugdual also writes a blog available at <a href="http://tugdualgrall.blogspot.com">http://tugdualgrall.blogspot.com </a>and is available <a href="http://twitter.com/tgrall">@tgrall</a>');
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
buf.push('\n<ul> \n  <li><a href="#/meeting/12">12. Code metrics</a></li>\n</ul>');
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
buf.push('\n<ul> \n  <li><a href="#/meeting/17">17. Spock</a></li>\n</ul>');
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
buf.push('\n<ul> \n  <li><a href="#/meeting/9">9. Spring Framework</a></li>\n</ul>');
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
buf.push('\n<ul> \n  <li><a href="#/meeting/11">11. Clean Code</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/16">16. Injectowanie od zera - wprowadzenie do Guice</a></li>\n</ul>');
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
buf.push('\n<ul> \n  <li><a href="#/meeting/10">10. JPA 2.0 cz. I</a></li>\n  <li><a href="#/meeting/13">13. JPS 2.0 cz. II </a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/15">15. Monitorowanie aplikacji</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul> \n  <li><a href="#/meeting/14">14. A journey in MongoDB land</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div ng-controller="PageCtrl">\n  <div id="top" page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div id="top" class="span12">\n            <h1>Prelegenci</h1>\n            <h2>Zostań prelegentem</h2>\n            <p>Jeżeli masz ochotę pokazać coś trochę mniej doświadczonym programistom to zachęcamy do zgłaszania tematów w <a href="https://docs.google.com/forms/d/1Zt_ws-STBfDESwI1rzhBmKcbWPQnGtsvRnIksESl2BI/viewform">formularzu</a>. Na zaproponowane tam tematy odpisujemy układając agendy kolejnych spotkań, więc prosimy nie przejmuj się, gdy przez jakiś czas nie odpowiadamy na zamieszczane tam tematy - my naprawdę o nich pamiętamy :).</p>\n            <p>Preferowane przez nas tematy kręcą się wokół Javy - bibliotek frameworków. W szczególności:\n              <ul>\n                <li><span>popularne technologie i biblioteki związane z Javą</span></li>\n                <li><span>dobre praktyki programistyczne</span></li>\n                <li><span>zaawansowane zagadnienia Javy (refleksja, adnotacje, typy generyczne)</span></li>\n                <li><span>dobre środowisko programistyczne - używanie IDE, maven/gradle, continous integration, system kontroli wersji</span></li>\n                <li><span>testowanie oprogramowania</span></li>\n                <li><span>“okolice" programowania - planowanie kariery, możliwe ścieżki rozwoju itp.</span></li>\n              </ul>\n            </p>\n            <div class="fixedHeight"></div>\n            <h2>Nasi prelegenci</h2>');
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
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/17">17. Spock</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Dominik Przybysz", "dominik_przybysz");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Używam od 5 lat Guice produkcyjnie.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/16">16. Injectowanie od zera - wprowadzenie do Guice</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Paweł Cesar Sanjuan Szklarz", "pawel_cesar_sanjuan_szklarz");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p></p>Na programowaniu spędził już połowę życia, od 6 lat zawodowo w Javie. Uwielbia back-end, toleruje JavaScript. Pasjonat Springa i języków około-Javowych. Rozczarowany jakością tworzonego oprogramowania (jakże często swojego!), nie znosi długich metod i ukrytych efektów ubocznych. Zakochany w wykresach, analizie danych i raportowaniu. Redaktor techniczny książek "Learning Highcharts" oraz "Getting started with IntelliJ IDEA". Uważa, że komputery wymyślono by programiści mogli automatyzować powtarzalne i nudne zadania. Także własne.\n');
buf.push.apply(buf, __indent);
buf.push('<p></p>Na co dzień programuje funkcyjnie dla sektora finansowego. Członek zespołu scala.net.pl, zaangażowany w open source. Wyróżniony DZone\'s Most Valuable Blogger, niegdyś aktywny na StackOverflow, najlepszy prelegent tegorocznej Confitury według uczestników. Lubi programować.\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/15">15. Monitorowanie aplikacji</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Tomasz Nurkiewicz", "tomasz_nurkiewicz");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p></p>Tugdual Grall aka "Tug" is a Technical Evangelist at MongoDB, an open source advocate and a passionate developer. He currently works with the European developer communities and MongoDB Partners to ease the NoSQL adoption.\n');
buf.push.apply(buf, __indent);
buf.push('<p></p>Tugdual is Co-Founder of the Nantes JUG (Java User Group) that holds since 2008 monthly meeting about Java ecosystem. Tugdual also writes a blog available at <a href="http://tugdualgrall.blogspot.com">http://tugdualgrall.blogspot.com </a>and is available <a href="http://twitter.com/tgrall">@tgrall</a>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/14">14. A journey in MongoDB land</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Tugdual Grall", "tugdual_grall");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Pracownik Działu Sieci Komputerowych Uniwersytetu Warszawskiego. Zawodowo zajmuje się integracją systemów, aplikacjami webowymi oraz zagadnieniami związanymi z zarządzaniem tożsamością. Zwolennik Springa oraz oprogramowania rozwijanego pod egidą Apache Software Foundation. Zainteresowany najróżniejszymi zakamarkami ekosystemu Javy przy dość potężnej rozpiętości od ciężkich biznesowych standardów przez frameworki znajdujące zastosowanie w większości aplikacji po współbieżność czy zagadnienia związane z JVM.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/10">10. JPA 2.0 cz. I</a></li>\n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/13">13. JPS 2.0 cz. II </a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Rafał Nagrodzki", "rafal_nagrodzki");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Programowaniem pasjonuje się od dekady, od kilku lat jego dzień dzieli się na programowanie w pracy i programowanie po pracy. Często uważa, że "to da się zrobić lepiej" i na swoje nieszczęście nie ustaje w poszukiwaniach tego "lepiej". </p>\n');
buf.push.apply(buf, __indent);
buf.push('<p>Obecnie programista w Allegro, na co dzień programuje w Java i JavaScript. Cały wolny czas pożera mu rozwój projektów OpenSource.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/12">12. Code metrics</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Adam Dubiel", "adam_dubiel");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Doświadczony programista Java i JEE. Entuzjasta technologii open source i metodologii agile. Na co dzień doskonali swój warsztat praktykując TDD i Pair Programming w firmie Pragmatists.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/11">11. Clean Code</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Michał Lipski", "michal_lipski");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Developer, architekt, analityk, team leader, coach, project manager, współorganizator Warszawa Java User Group, Spring Labs, Warsaw Groovy User Group, współautor książki "Spring Security Starter", okazjonalnie speaker. Szczegóły: <a href="http://solidcraft.eu/">solidcraft.eu</a></p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/9">9. Spring Framework</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Jakub Nabrdalik", "jakub_nabrdalik");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Doświadczony programista i architekt od ponad 8 lat zawodowo zajmujący się tworzeniem oprogramowania. Specjalizuje się w budowaniu wysokiej jakości rozwiązań w oparciu o idee ruchu Software Craftsmanship z wykorzystaniem technik związanych z automatycznym testowaniem kodu (jak Test-Driven Development, czy Continuous Integration).</p>\n');
buf.push.apply(buf, __indent);
buf.push('<p>Oprócz codziennego wykorzystywania swojej wiedzy w realizowanych projektach prowadzi szkolenia oraz mentoring zespołów pokazując jak można tworzyć czytelny, testowalny i łatwy w utrzymaniu kod. Dodatkowo prelegent na konferencjach, ekspert techniczny podczas publicznych warsztatów oraz prowadzący zajęcia ze studentami.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<p>Z zamiłowania entuzjasta wolnego oprogramowania, szczególnie powiązanego z Linuksem oraz autor i kontrybutor projektów FOSS. Od czasu do czasu bloguje o <a href="http://blog.solidsoft.info/">dobrym kodzie</a>.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/8">8. Mockito - biblioteka do mockowania</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Marcin Zajączkowski", "marcin_zajaczkowski");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Jestem Software Developerem w firmie Pragmatists, gdzie na co dzień pracuję stosując zwinne techniki, w tym choćby TDD i Pair Programming. Po godzinach realizuję szalone pomysły związane z automatycznym generowaniem wirtualnych terenów, tworzeniem gier i podbijaniem świata.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/7">7. Podstawy testowania</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Adam Pierzchała", "adam_pierzchala");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Na co dzień tworzy internet w Grupie Allegro, wcześniej wspierał poszukiwania bozonu Higgsa rozwijając oprogramowanie do monitorowania akceleratorów w CERN. Urodzony perfekcjonista, nauczony pragmatyk. Godzi zainteresowanie światem Pythona i Javy. W ramach odskoczni od IT uwielbia aktywny wypoczynek pod każdą postacią.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/5">5. 	Guava - JDK na sterydach</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Piotr Betkier", "piotr_betkier");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Z zamiłowania jestem fotografem oraz.... programistą. Nie przepuszczę żadnej okazji by fotografować, robię dużo dobrych zdjęć, które mają ducha i przesłanie. Lubię również programować, ostatnio nawet podczas podróży pociągiem do pracy wyciągam laptopa i programuję lub czytam o programowaniu. 18 lipca roku Pańskiego 2012 urodziła mi się córeczka, skutecznie konkuruje z moimi pasjami, stała się także moją główną modelką - nic dziwnego bo jest najładniejsza i najmądrzejsza ze wszystkich dzieci. Gdy śpi moja córa, siadam do programowania - czasem Java a ostatnio częściej C#, oba języki są bardzo przyjemne,  albo do obróbki zdjęć. Dziwnym trafem z zawodu jestem programistą i.... lubię swoją pracę :)</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/4">4. IDE</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Krzysztof Nielepkowicz", "krzysztof_nielepkowicz");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Zawodowo związany z PayU z ramienia którego buduje ogniwo rozwojowe w Warszawie (trzecia głowa smoka). Prywatnie czuje się mocno przywiązany do pakietu java.util.concurrent i klasy sun.misc.Unsafe. Poza tym pasjonują go lekkie aplikacje, w których stosunek kodu do dostarczanej funkcjonalności jest jak najmniejszy.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/4">4. IDE</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Jakub Kubryński", "jakub_kubrynski");
__indent.pop();
__indent.push('            ');
prelegent_mixin.call({
block: function(){
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<p>Michał Lewandowski - pracuje w jedynej słusznej (jego zdaniem) firmie, czyli w TouK. Świeżo upieczony absolwent. Na codzień developuje w Javie, z odchyłami w kierunku Grooviego. Po godzinach ciągnie go trochę w kierunku Scali, ale też poza JVM\'a. Intrygują go też wszystkie te Adżajlowe praktyki. Zwolennik (ale nie fanatyk) systemu z nadgryzionym jabłkiem, ale wróg JaTelefonów. Jak nie siedzi przy komputerze, ogląda się za dziełami sztuki w formie klasycznej motoryzacji.</p>\n');
buf.push.apply(buf, __indent);
buf.push('<h4>Poprowadzone spotkania</h4>\n');
buf.push.apply(buf, __indent);
buf.push('<ul> \n  ');
buf.push.apply(buf, __indent);
buf.push('<li><a href="#/meeting/3">3. GIT - krok po kroku</a></li>\n');
buf.push.apply(buf, __indent);
buf.push('</ul>');
}
}, "Michał Lewandowski", "michal_lewandowski");
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
buf.push('\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};