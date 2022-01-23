<template>
  <div class="page-container">
    <banner />
    <home-tech />
    <highlights />
    <product-showcase />
    <testimonials />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head () {
    return {
      title: 'Home | Havells Studio',
      link: [
        { 
          rel:'stylesheet',
          href:'https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.4.1/swiper-bundle.min.css' 
         },
         {
           rel: 'stylesheet',
           href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
         }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.4.1/swiper-bundle.min.js',
          defer: true 
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js',
          defer: true 
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollToPlugin.min.js',
          defer: true 
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollTrigger.min.js',
          defer: true 
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/EasePack.min.js',
          defer: true 
        }
      ]
    }
  },
  mounted() {
    window.addEventListener("load", function () {
      let splitWords = function (selector) {
        var elements = document.querySelectorAll(selector);

        elements.forEach(function (el) {
          el.dataset.splitText = el.textContent;
          el.innerHTML = el.textContent
            .split(/\s/)
            .map(function (word) {
              return word
                .split("-")
                .map(function (word) {
                  return '<span class="word">' + word + "</span>";
                })
                .join('<span class="hyphen">-</span>');
            })
            .join('<span class="whitespace"> </span>');
        });
      };

      let splitLines = function (selector) {
        var elements = document.querySelectorAll(selector);

        splitWords(selector);

        elements.forEach(function (el) {
          var lines = getLines(el);

          var wrappedLines = "";
          lines.forEach(function (wordsArr) {
            wrappedLines += '<span class="line"><span class="words">';
            wordsArr.forEach(function (word) {
              wrappedLines += word.outerHTML;
            });
            wrappedLines += "</span></span>";
          });
          el.innerHTML = wrappedLines;
        });
      };

      let getLines = function (el) {
        var lines = [];
        var line;
        var words = el.querySelectorAll("span");
        var lastTop;
        for (var i = 0; i < words.length; i++) {
          var word = words[i];
          if (word.offsetTop != lastTop) {
            // Don't start with whitespace
            if (!word.classList.contains("whitespace")) {
              lastTop = word.offsetTop;

              line = [];
              lines.push(line);
            }
          }
          line.push(word);
        }
        return lines;
      };

      splitLines(".reveal-text");

      let revealText = document.querySelectorAll(".reveal-text");

      gsap.registerPlugin(ScrollTrigger);
      let revealLines = revealText.forEach((element) => {
        const lines = element.querySelectorAll(".words");

        function addActive() {
          $(element).parents("section").addClass("active");
        }
                
        let tl = gsap.timeline({
          onComplete: function(){ 
            addActive();
          },
          scrollTrigger: {
            trigger: element,
            toggleActions: "restart none none reset"
          }
        });
        tl.set(element, { autoAlpha: 1 });
        tl.from(lines, 1, {
          yPercent: 100,
          ease: Power3.out,
          stagger: 0.25,
          delay: 0.2
        });
      });
    });
  }
}
</script>

<style lang="scss" scoped>
   section {
    padding: 90px 0;
   }
   .grid-section {
    min-height: 100vh;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
