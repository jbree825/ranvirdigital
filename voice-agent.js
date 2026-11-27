/* Ranvir Digital voice agent (Eva).
   Free browser Web Speech API: SpeechRecognition for listening,
   speechSynthesis for speaking. No signup, no API key, zero per minute cost.
   Part 1 is the pure knowledge base (no DOM), so it can be tested anywhere.
   Part 2 builds the widget UI. */

var RANVIR_VOICE_KB = [
  {
    id: 'greeting',
    keys: ['hello', 'hi', 'hey', 'namaste', 'namaskar', 'good morning', 'good evening', 'नमस्ते', 'नमस्कार', 'हेलो'],
    en: 'Hello! I am Eva, the voice assistant of Ranvir Digital. Ask me about our websites, prices, or how to order.',
    hi: 'नमस्ते! मैं ईवा हूँ, रणवीर डिजिटल की वॉइस असिस्टेंट। आप मुझसे हमारी वेबसाइट, कीमत या ऑर्डर के बारे में पूछ सकते हैं।'
  },
  {
    id: 'price',
    keys: ['price', 'cost', 'charge', 'charges', 'rate', 'rates', 'budget', 'kitna', 'kitne', 'paisa', 'paise', 'how much', 'कीमत', 'दाम', 'कितना', 'कितने', 'पैसे', 'रेट', 'खर्च'],
    en: 'Prices depend on what your business needs, so we never quote a fixed price before understanding your requirement. Tell us your budget and we will suggest the best option inside it. And remember, the first draft is free. You pay only if you like it.',
    hi: 'कीमत आपके बिज़नेस की ज़रूरत पर निर्भर करती है, इसलिए हम पहले आपकी ज़रूरत समझते हैं। आप अपना बजट बताइए, हम उसी में सबसे अच्छा विकल्प देंगे। और याद रखिए, पहला ड्राफ्ट बिल्कुल मुफ़्त है। पसंद आए तभी पैसे देने हैं।'
  },
  {
    id: 'free-draft',
    keys: ['free', 'draft', 'sample draft', 'demo', 'trial', 'मुफ़्त', 'मुफ्त', 'ड्राफ्ट', 'डेमो'],
    en: 'Yes, the first draft of your website is completely free. We build it, you see it, and you pay only if you like it. If you do not like it, you pay nothing.',
    hi: 'हाँ, आपकी वेबसाइट का पहला ड्राफ्ट बिल्कुल मुफ़्त है। हम बनाकर दिखाते हैं, पसंद आए तभी पैसे देने हैं। पसंद न आए तो कुछ नहीं देना।'
  },
  {
    id: 'delivery-time',
    keys: ['time', 'how long', 'days', 'delivery', 'ready', 'when', 'kab', 'din', 'समय', 'कितने दिन', 'कब', 'तैयार', 'दिन लगेंगे'],
    en: 'A simple one page website usually takes a few days once we have your business details, photos and prices. Ranvir will confirm the exact timeline before starting, so there are no surprises.',
    hi: 'एक साधारण एक पेज की वेबसाइट आमतौर पर कुछ ही दिनों में तैयार हो जाती है, जब हमें आपके बिज़नेस की जानकारी, फोटो और कीमतें मिल जाएँ। शुरू करने से पहले रणवीर आपको सही समय बता देंगे।'
  },
  {
    id: 'services',
    keys: ['service', 'services', 'offer', 'what do you', 'do you make', 'do you build', 'website banana', 'website banate', 'banate ho', 'kya karte ho', 'सेवा', 'सेवाएँ', 'क्या बनाते', 'क्या करते'],
    en: 'We build one page websites for local businesses like salons, cafes, clinics, gyms and restaurants. Every website includes your services and prices shown clearly, a WhatsApp button, online booking, and a smart chat assistant that answers customer questions. We also set up Google Business Profiles so customers can find you on Google.',
    hi: 'हम लोकल बिज़नेस के लिए एक पेज की वेबसाइट बनाते हैं, जैसे सैलून, कैफ़े, क्लिनिक, जिम और रेस्टोरेंट। हर वेबसाइट में आपकी सेवाएँ और कीमतें साफ़ दिखती हैं, WhatsApp बटन, ऑनलाइन बुकिंग और एक स्मार्ट चैट असिस्टेंट होता है जो ग्राहकों के सवालों के जवाब देता है। हम Google Business Profile भी बनाते हैं ताकि ग्राहक आपको Google पर ढूँढ सकें।'
  },
  {
    id: 'order',
    keys: ['order', 'how to order', 'how can i order', 'order a website', 'i want a website', 'i need a website', 'website chahiye', 'get started', 'start', 'book a website', 'shuru', 'ऑर्डर', 'शुरू', 'कैसे शुरू'],
    en: 'Starting is easy. Email Ranvir at jbree825@gmail.com with your business name and what you need. We will first make a free draft of your website. You pay only if you like it.',
    hi: 'शुरू करना आसान है। jbree825@gmail.com पर ईमेल कीजिए, अपने बिज़नेस का नाम और अपनी ज़रूरत लिखकर। हम पहले आपकी वेबसाइट का मुफ़्त ड्राफ्ट बनाएँगे। पसंद आए तभी पैसे देने हैं।'
  },
  {
    id: 'contact',
    keys: ['contact', 'email', 'mail', 'phone', 'number', 'reach', 'संपर्क', 'ईमेल', 'नंबर', 'फ़ोन', 'फोन'],
    en: 'You can email Ranvir at jbree825@gmail.com. That is the fastest way to reach us. You can also use the chat button on this page.',
    hi: 'आप रणवीर को jbree825@gmail.com पर ईमेल कर सकते हैं। हमसे जुड़ने का यही सबसे तेज़ तरीका है। इस पेज पर चैट बटन भी है।'
  },
  {
    id: 'chat-assistant',
    keys: ['chat', 'chatbot', 'chat assistant', 'चैट', 'चैटबॉट'],
    en: 'Every website we build includes a smart chat assistant for free. It answers customer questions from your own services, prices and timings, day and night, even when your shop is closed.',
    hi: 'हमारी हर वेबसाइट में एक स्मार्ट चैट असिस्टेंट मुफ़्त मिलता है। यह आपकी सेवाओं, कीमतों और समय की जानकारी से ग्राहकों के सवालों के जवाब देता है, दिन हो या रात, दुकान बंद होने पर भी।'
  },
  {
    id: 'voice-agent',
    keys: ['voice', 'talk', 'speak', 'mic', 'microphone', 'वॉइस', 'बोल', 'आवाज़', 'आवाज'],
    en: 'You are talking to me right now. I am Eva, a voice assistant. A voice assistant like me can also be added to your website, so your customers can simply talk and get answers.',
    hi: 'आप अभी मुझसे ही बात कर रहे हैं। मैं ईवा हूँ, एक वॉइस असिस्टेंट। मेरी जैसी वॉइस असिस्टेंट आपकी वेबसाइट में भी लग सकती है, ताकि आपके ग्राहक बोलकर ही जवाब पा सकें।'
  },
  {
    id: 'about',
    keys: ['ranvir', 'who', 'team', 'riya', 'about you', 'रणवीर', 'कौन', 'टीम', 'रिया'],
    en: 'Ranvir builds the websites, and Riya does the marketing and talks to shops. We are one small team with two roles, working together for local businesses.',
    hi: 'रणवीर वेबसाइट बनाते हैं, और रिया मार्केटिंग करती हैं और दुकानों से बात करती हैं। हम एक छोटी सी टीम हैं, दो काम, एक साथ मिलकर लोकल बिज़नेस के लिए काम करते हैं।'
  },
  {
    id: 'payment',
    keys: ['payment', 'pay', 'upi', 'advance', 'पेमेंट', 'भुगतान', 'एडवांस'],
    en: 'You pay only after you see the free draft and like it. Payment details are shared at that stage. No advance payment is needed to start.',
    hi: 'आप पैसे तभी देते हैं जब मुफ़्त ड्राफ्ट देखकर आपको पसंद आए। पेमेंट की जानकारी उसी समय दी जाती है। शुरू करने के लिए कोई एडवांस नहीं देना पड़ता।'
  },
  {
    id: 'samples',
    keys: ['sample', 'samples', 'example', 'examples', 'portfolio', 'your work', 'सैंपल', 'उदाहरण', 'काम दिखाओ'],
    en: 'You can see our sample websites on this page. Scroll to the Samples section to open live demos for a salon, gym, pharmacy, restaurant, dental clinic and bridal studio.',
    hi: 'आप इस पेज पर हमारे सैंपल देख सकते हैं। Samples सेक्शन में सैलून, जिम, फार्मेसी, रेस्टोरेंट, डेंटल क्लिनिक और ब्राइडल स्टूडियो के लाइव डेमो खुले हुए हैं।'
  },
  {
    id: 'google-profile',
    keys: ['google', 'profile', 'maps', 'ranking', 'rank', 'गूगल', 'प्रोफ़ाइल', 'प्रोफाइल'],
    en: 'We set up and fix Google Business Profiles so your shop shows up on Google Search and Maps with your correct timings, photos and reviews. It is the fastest way for nearby customers to find you.',
    hi: 'हम Google Business Profile बनाते और ठीक करते हैं ताकि आपकी दुकान Google Search और Maps पर सही समय, फोटो और रिव्यू के साथ दिखे। आसपास के ग्राहकों तक पहुँचने का यह सबसे तेज़ तरीका है।'
  },
  {
    id: 'thanks',
    keys: ['thank', 'thanks', 'dhanyavaad', 'shukriya', 'धन्यवाद', 'शुक्रिया'],
    en: 'You are most welcome. If you want a free draft for your business, just email jbree825@gmail.com.',
    hi: 'आपका स्वागत है। अगर आप अपने बिज़नेस के लिए मुफ़्त ड्राफ्ट चाहते हैं, तो बस jbree825@gmail.com पर ईमेल कीजिए।'
  }
];

var RANVIR_VOICE_FALLBACK = {
  en: 'Sorry, I did not understand that. You can ask me about prices, services, delivery time, the free draft, or how to order. Or email Ranvir at jbree825@gmail.com.',
  hi: 'माफ़ कीजिए, मैं यह समझ नहीं पाई। आप मुझसे कीमत, सेवाएँ, समय, मुफ़्त ड्राफ्ट या ऑर्डर के बारे में पूछ सकते हैं। या रणवीर को jbree825@gmail.com पर ईमेल कीजिए।'
};

function ranvirVoiceDetectLang(text) {
  return /[\u0900-\u097F]/.test(String(text || '')) ? 'hi' : 'en';
}

function ranvirVoiceKeyHit(q, key) {
  var k = key.toLowerCase();
  if (/^[a-z0-9 ]+$/.test(k)) {
    return new RegExp('\\b' + k.replace(/ /g, '\\s+') + '\\b').test(q);
  }
  return q.indexOf(k) !== -1;
}

function ranvirVoiceAnswer(text, lang) {
  var q = ' ' + String(text || '').toLowerCase() + ' ';
  var best = null;
  var bestScore = 0;
  for (var i = 0; i < RANVIR_VOICE_KB.length; i++) {
    var item = RANVIR_VOICE_KB[i];
    var score = 0;
    for (var j = 0; j < item.keys.length; j++) {
      if (ranvirVoiceKeyHit(q, item.keys[j])) score += item.keys[j].indexOf(' ') !== -1 ? 2 : 1;
    }
    if (score > bestScore || (score === bestScore && score > 0 && best && (best.id === 'greeting' || best.id === 'thanks') && item.id !== 'greeting' && item.id !== 'thanks')) {
      bestScore = score;
      best = item;
    }
  }
  var useLang = (lang === 'hi' || lang === 'en') ? lang : ranvirVoiceDetectLang(text);
  if (!best) return { id: 'fallback', lang: useLang, text: RANVIR_VOICE_FALLBACK[useLang] };
  return { id: best.id, lang: useLang, text: best[useLang] };
}

if (typeof window !== 'undefined') {
  window.RanvirVoiceAgent = {
    answerFor: ranvirVoiceAnswer,
    detectLang: ranvirVoiceDetectLang,
    kb: RANVIR_VOICE_KB
  };
}

/* ===== DOM WIDGET ===== */
(function () {
  if (typeof document === 'undefined') return;

  var state = {
    lang: 'en',
    listening: false,
    speaking: false,
    recog: null,
    greeted: false
  };

  var STR = {
    en: {
      fab: 'Talk to Eva',
      title: 'Eva',
      sub: 'Voice assistant, Ranvir Digital',
      idle: 'Tap the mic and ask me anything.',
      listening: 'Listening... speak now.',
      speaking: 'Eva is speaking...',
      hint: 'Tap the mic, then speak',
      placeholder: 'Or type your question here',
      send: 'Send',
      stop: 'Stop speaking',
      note: 'Voice works best in Chrome. Typing always works.',
      noMic: 'Voice input is not supported in this browser. Please type your question, I will still speak the answer.',
      micDenied: 'Microphone permission was blocked. Please allow the mic, or type your question below.',
      noSpeech: 'I did not hear anything. Please tap the mic and try again.',
      greeting: 'Hello! I am Eva. Tap the mic and ask me about our websites, prices, or how to order.',
      chips: ['What is the price?', 'Is the draft free?', 'How long will it take?', 'What services do you offer?', 'How do I contact you?']
    },
    hi: {
      fab: 'ईवा से बात करें',
      title: 'ईवा',
      sub: 'वॉइस असिस्टेंट, रणवीर डिजिटल',
      idle: 'माइक दबाइए और कुछ भी पूछिए।',
      listening: 'सुन रही हूँ... अब बोलिए।',
      speaking: 'ईवा बोल रही है...',
      hint: 'माइक दबाइए, फिर बोलिए',
      placeholder: 'या यहाँ लिखकर पूछिए',
      send: 'भेजें',
      stop: 'बोलना रोकें',
      note: 'वॉइस Chrome में सबसे अच्छी चलती है। लिखकर पूछना हमेशा काम करता है।',
      noMic: 'इस ब्राउज़र में वॉइस इनपुट नहीं चलता। कृपया लिखकर पूछिए, जवाब मैं बोलकर दूँगी।',
      micDenied: 'माइक की अनुमति रुकी हुई है। कृपया माइक की अनुमति दीजिए, या नीचे लिखकर पूछिए।',
      noSpeech: 'मुझे कुछ सुनाई नहीं दिया। कृपया माइक दबाकर फिर से बोलिए।',
      greeting: 'नमस्ते! मैं ईवा हूँ। माइक दबाकर मुझसे वेबसाइट, कीमत या ऑर्डर के बारे में पूछिए।',
      chips: ['कीमत कितनी है?', 'क्या ड्राफ्ट मुफ़्त है?', 'कितने दिन लगेंगे?', 'आप क्या सेवाएँ देते हैं?', 'संपर्क कैसे करूँ?']
    }
  };

  var MIC_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>';

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  var fab = el('button', 'va-fab', '<span class="va-dot" aria-hidden="true"></span>' + MIC_SVG + '<span class="va-fab-label"></span>');
  fab.type = 'button';
  fab.setAttribute('aria-controls', 'vaPanel');
  fab.setAttribute('aria-expanded', 'false');

  var panel = el('div', 'va-panel');
  panel.id = 'vaPanel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Voice assistant Eva');

  var head = el('div', 'va-head');
  var av = el('span', 'va-av', MIC_SVG);
  av.setAttribute('aria-hidden', 'true');
  var headText = el('div', '', '<strong class="va-title"></strong><span class="va-sub"></span>');
  var langBox = el('div', 'va-lang');
  var btnEn = el('button', '', 'EN');
  btnEn.type = 'button';
  btnEn.setAttribute('aria-label', 'English');
  var btnHi = el('button', '', 'हिंदी');
  btnHi.type = 'button';
  btnHi.setAttribute('aria-label', 'Hindi');
  langBox.appendChild(btnEn);
  langBox.appendChild(btnHi);
  var closeBtn = el('button', 'va-close', '&times;');
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close voice assistant');
  head.appendChild(av);
  head.appendChild(headText);
  head.appendChild(langBox);
  head.appendChild(closeBtn);

  var status = el('div', 'va-status');
  status.setAttribute('aria-live', 'polite');
  var log = el('div', 'va-log');
  log.setAttribute('aria-live', 'polite');

  var micWrap = el('div', 'va-mic-wrap');
  var micBtn = el('button', 'va-mic', MIC_SVG);
  micBtn.type = 'button';
  micBtn.setAttribute('aria-label', 'Start talking');
  var micHint = el('div', 'va-mic-hint');
  var stopBtn = el('button', 'va-stop');
  stopBtn.type = 'button';
  micWrap.appendChild(micBtn);
  micWrap.appendChild(micHint);
  micWrap.appendChild(stopBtn);

  var quick = el('div', 'va-quick');
  var form = el('form', 'va-form');
  var input = el('input');
  input.type = 'text';
  input.autocomplete = 'off';
  var sendBtn = el('button');
  sendBtn.type = 'submit';
  form.appendChild(input);
  form.appendChild(sendBtn);
  var note = el('div', 'va-note');

  panel.appendChild(head);
  panel.appendChild(status);
  panel.appendChild(log);
  panel.appendChild(micWrap);
  panel.appendChild(quick);
  panel.appendChild(form);
  panel.appendChild(note);

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  function t() { return STR[state.lang]; }

  function renderTexts() {
    fab.querySelector('.va-fab-label').textContent = t().fab;
    fab.setAttribute('aria-label', t().fab);
    panel.querySelector('.va-title').textContent = t().title;
    panel.querySelector('.va-sub').textContent = t().sub;
    micHint.textContent = t().hint;
    input.placeholder = t().placeholder;
    input.setAttribute('aria-label', t().placeholder);
    sendBtn.textContent = t().send;
    stopBtn.textContent = t().stop;
    note.textContent = SR ? t().note : t().noMic;
    btnEn.setAttribute('aria-pressed', state.lang === 'en' ? 'true' : 'false');
    btnHi.setAttribute('aria-pressed', state.lang === 'hi' ? 'true' : 'false');
    quick.innerHTML = '';
    t().chips.forEach(function (c) {
      var b = el('button', '', '');
      b.type = 'button';
      b.textContent = c;
      b.addEventListener('click', function () { ask(c); });
      quick.appendChild(b);
    });
    if (!state.listening && !state.speaking) status.textContent = t().idle;
  }

  function addMsg(text, who, live) {
    var m = el('div', 'va-msg ' + who + (live ? ' live' : ''));
    m.textContent = text;
    log.appendChild(m);
    log.scrollTop = log.scrollHeight;
    return m;
  }

  /* Speech synthesis */
  var voices = [];
  function loadVoices() {
    if ('speechSynthesis' in window) voices = window.speechSynthesis.getVoices() || [];
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function pickVoice(lang) {
    var want = lang === 'hi' ? 'hi' : 'en';
    var exact = lang === 'hi' ? 'hi-in' : 'en-in';
    var i, v;
    for (i = 0; i < voices.length; i++) {
      v = voices[i];
      if (v.lang && v.lang.toLowerCase().replace('_', '-') === exact) return v;
    }
    for (i = 0; i < voices.length; i++) {
      v = voices[i];
      if (v.lang && v.lang.toLowerCase().indexOf(want) === 0) return v;
    }
    return null;
  }
  function speak(text, lang) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    var parts = String(text).match(/[^.!?।]+[.!?।]*/g) || [text];
    state.speaking = true;
    status.textContent = t().speaking;
    stopBtn.classList.add('show');
    parts.forEach(function (p, idx) {
      var u = new SpeechSynthesisUtterance(p.trim());
      u.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
      var v = pickVoice(lang);
      if (v) u.voice = v;
      u.rate = 1;
      if (idx === parts.length - 1) {
        u.onend = u.onerror = function () {
          state.speaking = false;
          stopBtn.classList.remove('show');
          status.textContent = t().idle;
        };
      }
      window.speechSynthesis.speak(u);
    });
  }
  function stopSpeaking() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    state.speaking = false;
    stopBtn.classList.remove('show');
    status.textContent = t().idle;
  }
  stopBtn.addEventListener('click', stopSpeaking);

  /* Answer flow */
  function ask(question) {
    var q = String(question || '').trim();
    if (!q) return;
    addMsg(q, 'user');
    var lang = ranvirVoiceDetectLang(q) === 'hi' ? 'hi' : state.lang;
    var ans = ranvirVoiceAnswer(q, lang);
    addMsg(ans.text, 'bot');
    speak(ans.text, ans.lang);
  }

  /* Speech recognition */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  if (!SR) {
    micBtn.disabled = true;
    micHint.textContent = '';
    note.textContent = STR[state.lang].noMic;
  }

  function startListening() {
    if (!SR || state.listening) return;
    stopSpeaking();
    var rec = new SR();
    state.recog = rec;
    rec.lang = state.lang === 'hi' ? 'hi-IN' : 'en-IN';
    rec.interimResults = true;
    rec.continuous = false;
    rec.maxAlternatives = 1;
    var liveMsg = null;
    var finalText = '';

    rec.onstart = function () {
      state.listening = true;
      micBtn.classList.add('listening');
      micBtn.setAttribute('aria-label', 'Stop listening');
      status.textContent = t().listening;
    };
    rec.onresult = function (ev) {
      var interim = '';
      for (var i = ev.resultIndex; i < ev.results.length; i++) {
        var r = ev.results[i];
        if (r.isFinal) finalText += r[0].transcript;
        else interim += r[0].transcript;
      }
      var shown = (finalText + interim).trim();
      if (shown) {
        if (!liveMsg) liveMsg = addMsg(shown, 'user', true);
        else liveMsg.textContent = shown;
      }
    };
    rec.onerror = function (ev) {
      if (liveMsg) { liveMsg.remove(); liveMsg = null; }
      if (ev.error === 'not-allowed' || ev.error === 'service-not-allowed') {
        addMsg(t().micDenied, 'bot');
        status.textContent = t().idle;
      } else if (ev.error === 'no-speech') {
        addMsg(t().noSpeech, 'bot');
        status.textContent = t().idle;
      }
    };
    rec.onend = function () {
      state.listening = false;
      micBtn.classList.remove('listening');
      micBtn.setAttribute('aria-label', 'Start talking');
      if (liveMsg) { liveMsg.remove(); liveMsg = null; }
      var q = finalText.trim();
      if (q) ask(q);
      else if (!state.speaking) status.textContent = t().idle;
    };
    try { rec.start(); } catch (e) { /* already started */ }
  }

  function stopListening() {
    if (state.recog) {
      try { state.recog.stop(); } catch (e) {}
    }
  }

  micBtn.addEventListener('click', function () {
    if (state.listening) stopListening();
    else startListening();
  });

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var q = input.value;
    input.value = '';
    ask(q);
  });

  function setLang(lang) {
    state.lang = lang;
    stopSpeaking();
    renderTexts();
    if (!SR) note.textContent = t().noMic;
  }
  btnEn.addEventListener('click', function () { setLang('en'); });
  btnHi.addEventListener('click', function () { setLang('hi'); });

  function openPanel() {
    panel.classList.add('open');
    fab.setAttribute('aria-expanded', 'true');
    if (!state.greeted) {
      state.greeted = true;
      addMsg(t().greeting, 'bot');
    }
    input.focus();
  }
  function closePanel() {
    panel.classList.remove('open');
    fab.setAttribute('aria-expanded', 'false');
    stopListening();
    stopSpeaking();
  }
  fab.addEventListener('click', function () {
    if (panel.classList.contains('open')) closePanel();
    else openPanel();
  });
  closeBtn.addEventListener('click', closePanel);
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && panel.classList.contains('open')) closePanel();
  });

  renderTexts();
})();
