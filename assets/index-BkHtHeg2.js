(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))z(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&z(r)}).observe(document,{childList:!0,subtree:!0});function m(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function z(i){if(i.ep)return;i.ep=!0;const n=m(i);fetch(i.href,n)}})();document.querySelector("#app").innerHTML=`
  <div class="preload-fonts">Caveat Great Vibes Dancing Script</div>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo-container">
          <div class="logo">
            <img src="/logo.png" alt="Plan na cerę logo" class="logo-icon">
          </div>
          <div class="logo-text">plan na cerę</div>
        </div>
        <nav class="nav">
          <ul class="nav-links">
            <li><a href="#poznajmy-sie" class="nav-link">Poznajmy się</a></li>
            <li><a href="#jak-dzialamy" class="nav-link">Jak działam</a></li>
            <li><a href="#oferta" class="nav-link">Oferta</a></li>
            <li><a href="#faq" class="nav-link">FAQ</a></li>
            <li><a href="#kontakt" class="nav-link">Kontakt</a></li>
            <li><a href="#opinie" class="nav-link">Opinie</a></li>
          </ul>
          <a href="#kontakt" class="cta-primary">Napisz po swój plan</a>
        </nav>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle">
          <span class="menu-text">Menu</span>
          <span class="menu-icon">☰</span>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-menu" id="mobile-menu">
    <button class="mobile-menu-close" id="mobile-menu-close">✕</button>
    <ul class="nav-links">
      <li><a href="#poznajmy-sie" class="nav-link">Poznajmy się</a></li>
      <li><a href="#jak-dzialamy" class="nav-link">Jak działam</a></li>
      <li><a href="#oferta" class="nav-link">Oferta</a></li>
      <li><a href="#faq" class="nav-link">FAQ</a></li>
      <li><a href="#kontakt" class="nav-link">Kontakt</a></li>
      <li><a href="#opinie" class="nav-link">Opinie</a></li>
    </ul>
    <a href="#kontakt" class="cta-primary">Napisz po swój plan</a>
  </div>

  <button class="scroll-to-top" id="scroll-to-top">↑</button>

  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>👩🏻‍💻 Konsultacje kosmetologiczna z planem na cerę</h1>
          <h2><span class="hero-line-1">Odkryj plan, który podkreśli Twoje piękno</span><br><span class="hero-line-2">i zadba o Ciebie najlepiej, jak to możliwe.</span></h2>
          <a href="#poznajmy-sie" class="cta-secondary">Poznajmy się</a>
        </div>
        <div class="hero-image-container">
          <img src="/hero-image.png" alt="Konsultacja kosmetologiczna" class="hero-image">
        </div>
      </div>
    </div>
  </section>

  <section id="poznajmy-sie" class="section">
    <div class="container">
      <h2 class="section-subtitle">🤝 Poznajmy się</h2>
      <h3 class="section-title">Myślisz o uporządkowaniu domowej pielęgnacji, ale nie wiesz od czego zacząć?</h3>
      <p class="section-subtitle">Jako kosmetolog holistyczny pomogę Ci zrobić pierwszy krok. Ułóżmy czytelny plan dopasowany do Twojej cery i rytmu dnia. Jeśli chcesz zatroszczyć się o swoją skórę holistycznie, jak o ważną część całego organizmu - te konsultacje są dla Ciebie.</p>
    </div>
  </section>

  <section class="consultation-section">
    <div class="container">
      <div class="consultation-content">
        <div class="consultation-image">
          <img src="/consultation-image.png" alt="Konsultacja kosmetologiczna" class="consultation-img">
        </div>
        <div class="consultation-text">
          <h3 class="section-title white">Jak wygląda konsultacja kosmetologiczna?</h3>
          <div class="consultation-steps">
            <div class="consultation-step">
            <p>W mojej ofercie znajdziesz konsultacje online i mobilne. Niezależnie od tego, którą opcję wybierzesz, przejdziemy razem przez ponisze kroki:</p>
<br>
              <h4><span class="step-inline">1.</span> Rozmawiamy o Twojej cerze, stylu życia i zdrowiu.</h4>
              <p>Podczas rozmowy masz przestrzeń, by opowiedzieć o sobie i swojej codziennej pielęgnacji. Wierzę, że skóra odzwierciedla to, co dzieje się w całym organizmie, dlatego uważnie słucham, by znaleźć źródło problemów.</p>
            </div>
            <div class="consultation-step">
              <h4><span class="step-inline">2.</span> Analizujemy dotychczasową pielęgnację i suplementację.</h4>
              <p>Przyglądamy się Twoim codziennym rytuałom i stosowanym produktom, by znaleźć to, co wspiera Twoją skórę i wykluczyć to, co może jej szkodzić.</p>
            </div>
            <div class="consultation-step">
              <h4><span class="step-inline">3.</span> Ustalamy cele i tempo zmian, które będą dla Ciebie realne i komfortowe.</h4>
              <p>Dbam o to, by plan był dopasowany do Twoich możliwości i stylu życia - nie narzucam gotowych schematów. Razem ustalamy, jakie efekty są dla Ciebie najważniejsze i jak krok po kroku będziemy do nich dążyć.</p>
            </br>
            <hr>
            </br>
            <p><strong>Spotkanie w Twoim domu ma dodatkowy atut:</strong> mogę obejrzeć Twoją skórę w jej naturalnych, domowych warunkach. Przywożę ze sobą wygodny, przenośny sprzęt:</p>
            <ul>
              <li>korneometr (do pomiaru nawilżenia naskórka)</li>
              <li>lampę Wood'a (do precyzyjnej diagnostyki)</li>
              <li>lupę powiększającą</li>
            </ul>
            <p><strong>Jeśli wolisz spotkać się online:</strong> zadbam o to, by cały proces był jasny i komfortowy.</p>
              </div>
          </div>
          <a href="#oferta" class="cta-primary">Zacznij już dziś</a>
        </div>
      </div>
    </div>
  </section>

  <section class="about-author-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h3 class="section-title">Usiądź i opowiedz mi o swojej cerze
- razem znajdziemy najlepsze rozwiązanie.</h3>
          <p>Jestem kosmetologiem, absolwentką Collegium Medicum w Bydgoszczy oraz inżynierem informatyki po UKW w Bydgoszczy. Ukończyłam szkolenia z wizualnej analizy skóry i konsultacji kosmetologicznych. Obecnie studiuję podyplomowo Kosmetologię Holistyczną w Bydgoszczy.</p>
          <p>Zaczynałam jako informatyk, projektując rozwiązania, które upraszczały złożone rzeczy. To podejście zostało ze mną do dziś. Jako kosmetolog tłumaczę pielęgnację prostym językiem - bo wiem, jak to jest być poza światem beauty. Na co dzień tworzę indywidualne plany terapeutyczne z ciekawością obserwując, jak współczesny styl życia wpływa na naszą skórę.</p>
          <p>W pracy stawiam na zrozumienie potrzeb każdego podopiecznego oraz przyjazną i otwartą atmosferę.</p>
          <h4>Dlaczego to robię?</h4>
          <p>Moją największą motywacją jest inspirowanie do świadomej pielęgnacji i zdrowego stylu życia. Prowadzę profil na Instagramie @plannacere, gdzie dzielę się wiedzą i pomagam przywrócić radość z codziennej pielęgnacji.</p>
          <p class="author-signature">- Magdalena Twarogowska</p>
        </div>
        <div class="about-image">
          <img src="/author-image.png" alt="Magdalena Twarogowska" class="about-img">
        </div>
      </div>
    </div>
  </section>

  <section id="jak-dzialamy" class="section">
    <div class="container">
      <h2 class="section-subtitle">✨ Jak działam</h2>
      <h3 class="section-title">Prosta droga do zdrowej skóry</h3>
      <p class="section-subtitle">Nasza współpraca, to przejrzysty plan działania. Każdy etap został przemyślany tak, aby zapewnić Ci maksimum komfortu.</p>
      
      <div class="process-steps">
        <div class="process-step">
          <div class="step-number">1</div>
          <div class="step-icon">💁🏻‍♀️</div>
          <h4>Napisz do mnie wiadomość</h4>
          <p>Odpowiem na Twoje pytania i rozwieję wątpliwości - ten etap jest całkowicie bezpłatny. Gdy zdecydujesz się na zakup, dokonujesz opłaty, a następnie otrzymujesz mailowo ankietę.</p>
        </div>
        <div class="process-step">
          <div class="step-number">2</div>
          <div class="step-icon">👩🏻‍💻</div>
          <h4>Umów termin konsultacji</h4>
          <p>Po wypełnieniu ankiety razem wybierzemy dogodny termin konsultacji - najwcześniej 5 dni roboczych od jej przesłania. Dzięki temu będę mogła dobrze przygotować się do naszego spotkania.</p>
        </div>
        <div class="process-step">
          <div class="step-number">3</div>
          <div class="step-icon">🧖🏻‍♀️</div>
          <h4>Ciesz się efektami i wsparciem</h4>
          <p>Z radością przekażę Ci spersonalizowany plan na cerę. Dodatkowo, możesz liczyć na moje wsparcie przez 30 dni od otrzymania planu. To czas na swobodne wprowadzanie zmian i otrzymanie pomocy na starcie.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="plan-content-section">
    <div class="container">
      <div class="plan-content">
        <div class="plan-image">
          <img src="/plan-guide.png" alt="Przewodnik po planie na cerę" class="plan-guide-img">
        </div>
        <div class="plan-text">
          <h3 class="section-title">Co znajdziesz w swoim planie?</h3>
          
          <div class="plan-features">
            <div class="plan-feature">
              <div class="feature-number">1</div>
              <h4>Opis aktualnej kondycji skóry</h4>
              <p>Dokładną charakterystykę Twojej skóry i jej potrzeb oraz tego co jej pomaga, a co może jej szkodzić.</p>
            </div>
            <div class="plan-feature">
              <div class="feature-number">2</div>
              <h4>Główne cele terapeutyczne</h4>
              <p>Jasno określone priorytety i cele, które wspólnie chcemy osiągnąć – np. poprawa nawilżenia, redukcja niedoskonałości, wzmocnienie bariery ochronnej.</p>
            </div>
            <div class="plan-feature">
              <div class="feature-number">3</div>
              <h4>Codzienny schemat pielęgnacji domowej</h4>
              <p>Szczegółowy plan dopasowany do Twoich możliwości – mogą to być zarówno kosmetyki profesjonalne, jak i drogeryjne. Schemat może być minimalistyczny lub bardziej rozbudowany, z uwzględnieniem peelingów, masek czy retinolu – wszystko zależy od Twoich preferencji i oczekiwań.</p>
            </div>
            <div class="plan-feature">
              <div class="feature-number">4</div>
              <h4>Propozycje terapii gabinetowych</h4>
              <p>Rekomendacje zabiegów lub ich połączeń, które najlepiej odpowiedzą na potrzeby Twojej skóry.</p>
            </div>
            <div class="plan-feature">
              <div class="feature-number">5</div>
              <h4>Wskazówki dotyczące stylu życia i suplementacji</h4>
              <p>Praktyczne porady dotyczące suplementów oraz codziennych nawyków, które wspierają zdrowie skóry od środka.</p>
            </div>
          </div>
          
          <a href="#oferta" class="cta-primary">Zacznij już dziś</a>
        </div>
      </div>
    </div>
  </section>

  <section id="oferta" class="offer-section">
    <div class="container">
      <h2 class="section-subtitle">🎯 Oferta</h2>
      <h3 class="section-title">Droga do zdrowej skóry zaczyna się tutaj</h3>
      <p class="section-subtitle">Każda skóra, każda sytuacja zdrowotna i pielęgnacja, to unikalna historia. 
Pozwól, że pomogę Ci napisać jej nowy, piękny rozdział.</p>
      
      <div class="offer-cards">
        <div class="offer-card">
          <div class="card-header">
            <h4><strong>Online</strong></h4>
            <h3>Konsultacja z planem na cerę</h3>
            <div class="price">299 zł</div>
          </div>
          <p class="card-description">Dla cer, które które nie potrzebują spotkania na żywo, by uporządkować pielęgnację. Najwygodniejsza dla tych, którzy cenią spokój i oszczędność czasu - zwłaszcza przy napiętym grafiku.</p>
          <ul class="card-features">
            <li>Ankieta przed konsultacją</li>
            <li><strong>60 min. </strong>konsultacji online przy pomocy wybranego komunikatora</li>
            <li class="feature-dash">Diagnostyka skóry za pomocą przenośnych <strong>urządzeń</strong>: korneometru, lampy Wood'a i lupy.</li>
            <li><strong>Nowy</strong> plan na cerę</li>
              <li><strong>30 dni</strong> wsparcia mailowego</li>
          </ul>
          <a href="#kontakt" class="cta-primary">Napisz po swój plan</a>
          
        </div>

        <div class="offer-card featured">
          <div class="card-header">
            <h4><strong>Mobilnie</strong></h4>
            <h3>Konsultacja z planem na cerę</h3>
            <div class="price">349 zł</div>
          </div>
          <p class="card-description">Dla cer ze zmiennymi objawami, które trudno uchwycić na zdjęciach. Najlepsza, gdy liczą się pomiary nawilżenia, ocena przebarwień i porów skóry - dla precyzyjnie dobranego planu.</p>
          <ul class="card-features">
            <li>Ankieta przed konsultacją</li>
            <li><strong>90 min.</strong> konsultacji mobilnej w Twoim domu</li>
             <li>Diagnostyka skóry za pomocą przenośnych <strong>urządzeń</strong>: korneometru, lampy Wood'a i lupy.</li>
            <li><strong>Nowy</strong> plan na cerę</li>
            <li><strong>30 dni</strong> wsparcia mailowego</li>
          </ul>
          <a href="#kontakt" class="cta-primary">Napisz po swój plan</a>
          <p class="card-note">Dojazd w Bydgoszczy i okolicach</p>
        </div>

        <div class="offer-card">
          <div class="card-header">
            <h4><strong>Online</strong></h4>
            <h3>Aktualizacja planu</h3>
            <div class="price">149 zł</div>
          </div>
          <p class="card-description">Dla cer, które chcą odświeżyć swoją pielęgnację. Jeśli Twoja skóra potrzebuje nowej energii lub dopasowania do zmieniających się potrzeb - ta konsultacja jest właśnie dla Ciebie.</p>
          <ul class="card-features">
            <li class="feature-dash">Ankieta przed konsultacją</li>
            <li><strong>30 min.</strong> konsultacji <strong>online</strong> przy pomocy wybranego komunikatora</li>
            <li class="feature-dash">Diagnostyka skóry za pomocą przenośnych <strong>urządzeń</strong>: lupy, lampy Wood'a i korneometru</li>
            <li><strong>Zaktualizowany</strong> plan na cerę</li>
            <li><strong>14 dni</strong> wsparcia mailowego</li>
          </ul>
          <a href="#kontakt" class="cta-primary">Napisz po swój plan</a>
          <p class="card-note">Do 8 miesięcy od poprzedniego planu - dla powracających Klientów</p>
        </div>
      </div>
    </div>
  </section>

  <section class="benefits-section">
    <div class="container">
      <h3 class="section-title">Dlaczego warto?</h3>
      <p class="section-subtitle">Najpierw człowiek, potem procedura. Plan nie rozpoczyna się od zabiegu, lecz od rozmowy i stworzenia indywidualnej ścieżki działania.</p>
      
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">🧩</div>
          <h4>Indywidualne podejście</h4>
          <p>Otrzymasz plan dopasowany do aktualnych potrzeb Twojej cery i stylu życia. Każda rekomendacja powstaje na podstawie rozmowy i analizy Twojej sytuacji - nie korzystam z gotowych schematów.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🛟</div>
          <h4>Współpraca i wsparcie</h4>
          <p>Jesteś partnerem w procesie zmiany i to Ty wybierasz, czy w Twoim planie pojawią się kosmetyki z zapachem, czy bez. Ja jestem tu, by Cię wysłuchać i pomóc w stworzeniu planu, który będzie naprawdę Twój.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">✨</div>
          <h4>Holistyczny efekt</h4>
          <p>Zyskujesz nie tylko poprawę wyglądu skóry, ale także lepsze samopoczucie i większą świadomość swojego ciała. Praca nad pielęgnacją staje się okazją do zadbania o siebie w szerszym kontekście.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="faq" class="faq-section">
    <div class="container">
      <div class="faq-content">
        <div class="faq-left">
          <h2 class="section-subtitle">🤔 FAQ</h2>
          <h3 class="section-title">Najczęściej zadawane pytania</h3>
          
          <div class="faq-items">
            <div class="faq-item">
              <div class="faq-question">
                <h4>Czy muszę przygotować się do ankiety lub konsultacji?</h4>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p><strong>Nie</strong>, nie musisz się specjalnie przygotowywać. Ale jeśli chcesz w pełni wykorzystać nasz wspólny czas, mam dla Ciebie kilka prostych wskazówek.</p>
                
                <h5>Przygotowanie do ankiety</h5>
                <ul>
                  <li>na tydzień przed wypełnieniem ankiety nie wykonuj zabiegów kosmetologicznych - dzięki temu łatwiej będzie Ci ocenić naturalny stan Twojej cery</li>
                  <li>przygotuj listę kosmetyków, których obecnie używasz (od żelu do mycia twarzy, po krem na noc)</li>
                  <li>jeśli masz aktualne wyniki badań krwi (do 3 miesięcy) lub historię leczenia dermatologicznego, możesz je przygotować - ale nie są obowiązkowe</li>
                  <li>przygotuj 3 zdjęcia twarzy: z przodu oraz z obu profili. Zdjęcia powinny być wykonane w naturalnym świetle i bez makijażu</li>
                </ul>
                
                <h5>Przygotowanie do konsultacji online</h5>
                <ul>
                  <li>znajdź dla siebie spokojne miejsce z dobrym oświetleniem, jeśli chcesz - przygotuj dla siebie ulubiony napój</li>
                  <li>jeśli to możliwe, nie nakładaj makijażu - pozwoli nam to zobaczyć naturalny stan Twojej skóry</li>
                  <li>zapisz nurtujące Cię pytania i przemyślenia dotyczące pielęgnacji - dzięki temu omówimy wszystko, co jest dla Ciebie ważne</li>
                </ul>
                
                <p>Przed spotkaniem możesz zrobić krótką próbę, sprawdź, czy kamera i mikrofon działają prawidłowo, a także upewnij się, że masz stabilne połączenie z internetem. Konsultacje najczęściej odbywają się za pośrednictwem aplikacji WhatsApp.</p>

                <h5>Przygotowanie do konsultacji w Twoim domu</h5>
                <ul>
                  <li>przygotuj dostęp do gniazdka elektrycznego (do zasilania urządzeń) oraz trochę przestrzeni do ustawienia sprzętu i wygodnej rozmowy</li>
                
                </ul>
                <p>To wszystko - resztą zajmę się ja :)</p>
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <h4>Co znajdę w ankiecie?</h4>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Ankieta, którą dla Ciebie przygotowałam, składa się z <strong>dwóch części</strong>.</p>
                <p><strong>W pierwszej</strong>, zapytam Cię o styl życia, stan zdrowia, dietę, stan skóry i Twoją dotychczasową pielęgnację.</p>
                <p><strong>W drugiej</strong>, skupimy się na określeniu oczekiwań, budżetu oraz Twoich preferencji co do kosmetyków.</p>
                <p>Twoje odpowiedzi pomogą mi nie tylko stworzyć spersonalizowany plan na cerę, ale także lepiej przygotować się do naszej konsultacji.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <h4>Jak przebiega konsultacja?</h4>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Możesz wybrać konsultację <strong>online lub mobilną</strong> To nasz wspólny czas na spokojną rozmowę, podczas której rozwijamy informacje z ankiety i odpowiadam na wszystkie Twoje pytania.</p>

                <h5><strong>Podczas spotkania porozmawiamy o:</strong></h5>
                <ul>
                  <li>tym, co Cię do mnie sprowadza - wysłucham Twoich obaw i oczekiwań,</li>
                  <li>Twoim obecnym stanie zdrowia, stylu życia i dotychczasowej pielęgnacji,</li>
                  <li>wynikach badań, jeśli takie posiadasz - chętnie je z Tobą przeanalizuję,</li>
                  <li>wszelkich wątpliwościach i pytaniach, które pojawiły się przy wypełnianiu ankiety,</li>
                  <li>kierunku pielęgnacji, który wspólnie ustalimy jako najlepszy dla Ciebie.</li>
                </ul>

                <p><strong>W ciągu 5 dni roboczych</strong> od naszego spotkania otrzymasz na maila kompleksowy plan na cerę, który będzie dokładnie dostosowany do Twoich potrzeb.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <h4>Jak przebiega konsultacja przy aktualizacji poprzedniego planu?</h4>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Konsultacja przy aktualizacji poprzedniego planu to czas na podsumowanie efektów Twojej wcześniejszej pielęgnacji i wprowadzenie modyfikacji lub nowych rozwiązań.</p>

                <h5><strong>Podczas 30-minutowego spotkania porozmawiamy o:</strong></h5>
                <ul>
                  <li>Twoich wrażeniach i odczuciach po wprowadzeniu nowego planu pielęgnacji,</li>
                  <li>zmianach, które zauważyłaś/eś na swojej skórze,</li>
                  <li>ewentualnych trudnościach, które napotkałaś/eś podczas stosowania zaleconych produktów,</li>
                  <li>tym, co sprawdziło się najlepiej, a co wymaga dostosowania,</li>
                  <li>kolejnych krokach w Twojej pielęgnacji</li>
                </ul>

                <p>Następnie, jeżeli będzie taka potrzeba, to <strong>w ciągu 3 dni roboczych</strong> od naszego spotkania otrzymasz na maila zaktualizowany plan na cerę, uwzględniający nasze nowe ustalenia.</p>

                
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <h4>Jak szybko otrzymam swój plan na cerę i co w nim znajdę?</h4>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Plan na cerę otrzymasz <strong>w ciągu 5 dni roboczych</strong> od naszej konsultacji online.</p>

                <p>Jest to dokument w formacie PDF, w którym znajdziesz:</p>
                <ul>
                  <li>szczegółową analizę Twojej cery i jej aktualnych potrzeb,</li>
                  <li>cele terapeutyczne - nasz wspólny plan działania,</li>
                  <li>wskazówki pielęgnacyjne, czyli informacje o tym, co służy Twojej skórze, a co może na nią niekorzystnie wpływać,</li>
                  <li>dokładny plan pielęgnacji porannej i wieczornej, a także propozycje pielęgnacji uzupełniającej, na przykład z użyciem masek, retinolu czy peelingu</li>
                  <li>instrukcję stosowania każdego kosmetyku,</li>
                  <li>dodatkowe zalecenia związane z dietą i suplementacją.</li>
                </ul>

                <p>Twój plan na cerę może być zarówno minimalistyczny, jak i bardziej rozbudowany - wszystko zależy od Twoich oczekiwań, potrzeb skóry i jej gotowości. Wspólnie ustalimy, jaka forma pielęgnacji będzie dla Ciebie najlepsza, a z czasem możemy ją stopniowo rozwijać.</p>

                
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <h4>Jak wygląda wsparcie po otrzymaniu planu na cerę?</h4>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Początek przygody z nowym planem pielęgnacyjnym, powinien być dla Ciebie komfortowy i spokojny. Dlatego, po jego otrzymaniu możesz liczyć na moje wsparcie.</p>
                <p>Jeśli pojawią się jakiekolwiek pytania podczas wprowadzania zaleceń, napisz do mnie na <strong>plannacere@gmail.com</strong>. Odpowiadam na wszystkie wiadomości w dni robocze między 9:00, a 15:00, dbając o to, by każde Twoje pytanie otrzymało pełną i wyczerpującą odpowiedź.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <h4>Jak mogę umówić termin konsultacji?</h4>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Po zakupie planu na cerę otrzymasz ode mnie maila z ankietą. Gdy ją wypełnisz i odeślesz, <strong>wspólnie ustalimy szczegóły i dogodny termin spotkania</strong> - konsultacja odbędzie się najwcześniej <strong>po 5 dniach roboczych</strong>, abym mogła spokojnie zapoznać się z Twoimi odpowiedziami i dobrze przygotować się do rozmowy.</p>
                
                
                
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <h4>Czy ta oferta jest dla mnie?</h4>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p><strong>Tak</strong>, jeśli szukasz domowej pielęgnacji, która naturalnie wpisze się w Twój codzienny tryb życia.</p>
                
                <h5>Szczególnie, jeśli:</h5>
                <ul>
                  <li>borykasz się z problemami skórnymi takimi jak trądzik czy przebarwienia, ale nie wiesz od czego zacząć</li>
                  <li>szukasz dogłębnej analizy przyczyn problemów Twojej skóry</li>
                  <li>potrzebujesz wsparcia w uporządkowaniu swojej rutyny pielęgnacyjnej</li>
                  <li>brakuje Ci konkretnych wskazówek, jak dbać o skórę</li>
                  <li>marzysz o tym, by pielęgnacja stała się przyjemnością, a nie kolejnym obowiązkiem</li>
                </ul>
                
                <p>🤰🏻 Z radością pomogę Ci także, jeśli jesteś w ciąży lub karmisz piersią - przygotuję dla Ciebie bezpieczny plan pielęgnacji, uwzględniający szczególne potrzeby Twojej skóry w tym wyjątkowym czasie.</p>
              </div>
            </div>
            
    
          </div>
        </div>
        
        <div class="faq-right">
          <img src="/faq-image.png" alt="FAQ" class="faq-image">
        </div>
      </div>
    </div>
  </section>

  <section id="kontakt" class="instagram-section">
    <div class="container">
      <div class="instagram-content">
        <div class="instagram-card">
          <h3>Zajrzyj za kulisy</h3>
          <p>Na Instagramie dzielę się wiedzą o pielęgnacji, odpowiadam na pytania i pokazuję, jak wygląda proces tworzenia spersonalizowanych planów na cerę.</p>
          <a href="https://instagram.com/plannacere" target="_blank" class="instagram-handle">
            <span class="instagram-icon">📷</span>
            <span>plannacere</span>
          </a>
        </div>
        
        <div class="contact-card">
          <div class="contact-pretitle">✍️ Kontakt</div>
          <h2 class="contact-title">Chcesz kupić swój plan lub voucher dla bliskiej osoby?</h2>
          <p>A może masz wątpliwości lub potrzebujesz dodatkowych informacji? Możesz się ze mną skontaktować mailowo. Zazwyczaj odpowiadam w ciągu 24 godzin w dni robocze.</p>
          <p class="contact-email">Napisz do mnie na: <strong>plannacere@gmail.com</strong>.</p>
        </div>
      </div>
    </div>
  </section>

  

  <section id="opinie" class="testimonials-section">
    <div class="container">
      <h2 class="section-subtitle">🍿 Opinie</h2>
      <h3 class="section-title">Co mówią osoby, które otrzymały plan na cerę?</h3>
      <p class="section-subtitle">Każda z tych historii to osobista podróż do zdrowej skóry - od pierwszych wątpliwości, przez moment decyzji, aż po satysfakcję z osiągniętych efektów.</p>
      
      <div class="testimonials-wrapper">
        <div class="testimonials-track">
          <div class="testimonial-card">
            <p>"Wybrałam opcję dla nowych klientów. Okazało się, że wiele moich kosmetyków było dobrych i zostawiłyśmy je w pielęgnacji. Dostałam jednak wskazówki, co dokupić, aby podkręcić obecną pielęgnację. Taka 'mała zmiana', a efekty przeszły moje oczekiwania!"</p>
            <div class="testimonial-author">👩🏻 Katarzyna, 38 lat</div>
          </div>
          
          <div class="testimonial-card">
            <p>"Bardzo starannie opracowany plan pielęgnacyjny, kosmetyki świetnie dobrane do potrzeb mojej skóry, ale również do mojego portfela. Współpraca z Magdą to czysta przyjemność. Potrafi słuchać, jest zaangażowana i ma dużą wiedzę, a przy tym jest bardzo sympatyczną i ciepłą osobą. Po konsultacji byłyśmy w kontakcie, więc wszelkie moje wątpliwości były zaraz rozwiewane."</p>
            <div class="testimonial-author">👩🏼‍🦰 Monika, 33 lata</div>
          </div>
          
          <div class="testimonial-card">
            <p>"Zdecydowanie polecam! Schemat pielęgnacji w bardzo krótkim czasie przyniósł niesamowite rezultaty! Do tej pory nie miałam tak starannie dobranych kosmetyków do potrzeb mojej skóry. Cera stała się bardziej promienna, nawilżona i oczyszczona."</p>
            <div class="testimonial-author">👱🏻‍♀️ Monika, 27 lat</div>
          </div>
          
          <div class="testimonial-card">
            <p>"Mimo wrażliwej cery, chciałam wprowadzić do swojej pielęgnacji kwasy. Pani Magda dokładnie wyjaśniła, jak zrobić to bezpiecznie i stopniowo. Podczas miesięcznego wsparcia, udało nam się wprowadzić dwa kwasowe kosmetyki. Jestem bardzo zadowolona ze współpracy i efektów!"</p>
            <div class="testimonial-author">👩🏻‍🦳 Hanna, 62 lata</div>
          </div>

          <div class="testimonial-card">
            <p>"Bardzo cieszę się, że zdecydowałam się na ten plan! Myślałam, że wszystko robię dobrze, ale jednak chyba tak nie było. Moja cera aż promienieje! Dziękuję 🙏🏻"</p>
            <div class="testimonial-author">👱🏼‍♀️ Paulina, 34 lata</div>
          </div>
        </div>
        <button class="testimonial-nav prev" aria-label="Poprzednia">‹</button>
        <button class="testimonial-nav next" aria-label="Następna">›</button>
      </div>
      
      <div class="testimonials-pagination"></div>
      
      <div class="cta-center">
        <a href="#kontakt" class="cta-primary large">Dołącz do zadowolonych klientów</a>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-logo">
            <div class="logo">
              <img src="/logo.png" alt="Plan na cerę logo" class="logo-icon">
            </div>
            <div class="logo-text">plan na cerę</div>
          </div>
          
          <div class="footer-description">
            <p>Plan na cerę to miejsce, gdzie otrzymasz profesjonalny, dopasowany do Twoich potrzeb dokument terapeutyczny. Uwzględniający aktualną kondycję skóry, cele terapeutyczne, pielęgnację domową oraz wskazówki dotyczące stylu życia i suplementacji. Bez zgadywania, bez niepotrzebnych zakupów - tylko skuteczna droga do zdrowej skóry.</p>
            <a href="https://instagram.com/plannacere" target="_blank" class="footer-social">
              <span class="instagram-icon">📷</span>
              <span>plannacere</span>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <ul>
              <li><a href="#poznajmy-sie">Poznajmy się</a></li>
              <li><a href="#jak-dzialamy">Jak działam</a></li>
              <li><a href="#oferta">Oferta</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
              <li><a href="#opinie">Opinie</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-copyright">
          <span>© 2025 Plan na cerę</span>
          <a href="/PolitykaPrywatnosci.pdf" target="_blank">Polityka prywatności</a>
          <a href="/RegulaminKonsultacjeOnlineMobilne.pdf" target="_blank">Regulamin</a>
        </div>
      </div>
    </div>
  </footer>
`;document.addEventListener("DOMContentLoaded",function(){const g=document.getElementById("mobile-menu-toggle"),l=document.getElementById("mobile-menu"),m=document.getElementById("mobile-menu-close");function z(){l.classList.add("active"),document.body.style.overflow="hidden"}function i(){l.classList.remove("active"),document.body.style.overflow=""}g.addEventListener("click",z),m.addEventListener("click",i),l.querySelectorAll(".nav-link, .cta-primary").forEach(a=>{a.addEventListener("click",i)});const r=document.getElementById("scroll-to-top");window.addEventListener("scroll",()=>{window.pageYOffset>300?r.classList.add("visible"):r.classList.remove("visible")}),r.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const T={threshold:.1,rootMargin:"0px 0px -50px 0px"},P=new IntersectionObserver(a=>{a.forEach(e=>{e.isIntersecting&&e.target.classList.add("animate-in")})},T);document.querySelectorAll(".process-step, .offer-card, .benefit-card, .testimonial-card").forEach(a=>{P.observe(a)});const w=document.querySelector(".testimonials-wrapper"),u=document.querySelector(".testimonials-track"),v=document.querySelector(".testimonial-nav.prev"),h=document.querySelector(".testimonial-nav.next"),y=document.querySelector(".testimonials-pagination");if(w&&u&&v&&h&&y){let o=function(){y.innerHTML="";const t=a[0].clientWidth+40,c=Math.max(1,Math.floor(w.clientWidth/t)),j=Math.max(1,a.length-c+1);for(let d=0;d<j;d++){const p=document.createElement("span");p.className="pagination-dot"+(d===e?" active":""),p.addEventListener("click",()=>s(d)),y.appendChild(p)}},s=function(t){const c=a[0].clientWidth+40,j=Math.max(0,a.length-Math.max(1,Math.floor(w.clientWidth/c)));e=Math.max(0,Math.min(t,j)),u.style.transform=`translateX(${-e*c}px)`,y.querySelectorAll(".pagination-dot").forEach((p,E)=>p.classList.toggle("active",E===e))};var O=o,S=s;const a=Array.from(u.children);let e=0;v.addEventListener("click",()=>s(e-1)),h.addEventListener("click",()=>s(e+1)),window.addEventListener("resize",()=>{o(),s(e)}),o(),s(0)}const b=document.querySelectorAll(".faq-item");b.forEach(a=>{a.querySelector(".faq-question").addEventListener("click",()=>{const o=a.classList.contains("active");b.forEach(s=>{s.classList.remove("active")}),o||a.classList.add("active")})}),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(e){e.preventDefault();const o=this.getAttribute("href").substring(1),s=document.getElementById(o);if(s){const t=document.querySelector(".header").offsetHeight,c=s.offsetTop-t-20;window.scrollTo({top:c,behavior:"smooth"})}})});const L=document.querySelectorAll(".nav-link"),M=document.querySelectorAll(".mobile-menu .nav-link"),C=document.querySelectorAll("section[id]");function f(a){[...L,...M].forEach(o=>{o.classList.remove("active"),o.getAttribute("href")===`#${a}`&&o.classList.add("active")})}function q(){const a=document.querySelector(".header").offsetHeight,e=window.scrollY+a+100;let o=null;C.forEach(s=>{const t=s.offsetTop,c=s.offsetHeight;e>=t&&e<t+c&&(o=s.id)}),o&&f(o)}let k=!1;window.addEventListener("scroll",()=>{k||(window.requestAnimationFrame(()=>{q(),k=!1}),k=!0)}),setTimeout(()=>{if(window.location.hash){const a=window.location.hash.substring(1);f(a)}else q()},100)});
