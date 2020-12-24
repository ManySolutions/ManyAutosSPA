<template>
  <div class="text-sliding text-slideshow">
    <ul id="sentence" class='text-white'>
      <ul id="textSlider"></ul>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: {
    options: Array
  },
  data: () => ({

  }),
  mounted() {
    const adjs = this.options,
    sentence = $('#sentence'),
    textSlider = $('#textSlider'),
    stop = false;

    function getList() {
      return $('.adj');
    }

    // function to build the adjective list
    // args: adjective array
    function build(arr) {
      for (let i=0; i<arr.length; i++) {
        var item = "<li class='adj'>";
        $(textSlider).append(item + arr[i] + "</li>");
      }
    }

    // function to resize adjective list
    // args: adjective list item
    function resize(el) {
      $(textSlider).animate({
        width: $(el).width(),
      }, 200);
    }

    // function to add slide-in transition
    // args: element that needs to slide
    function slideIn(el) {
      // duration slide is on screen
      var hold = 1000;
      // resize area to sliding element
      resize($(el));
      // add slide-in class
      $(el).addClass('slide-in'); 
      // after 'hold' duration slide-out current item
      // then slide in next item
      setTimeout(function(){
        // check to see if loop should continue
        if (stop === true) {
          stop = false;
          return;
        }
        // slide current element out
        slideOut(el);
        // slide in next element in queue
        slideIn($(el).next());
      }, hold);
    }

    // function to add slide-out transition
    // args: element that needs to slide
    function slideOut(el) {
      // remove current class and add slide-out transition
      $(el).removeClass('slide-in').addClass('slide-out');
      // wait for slide tramsition to finish then
      // call 'change' function
      setTimeout(function(){
        change();
      }, 200);
    }

    // function to re-arrange adjective list
    function change() {
      // store last item index
      let i = adjs.length - 1;
      // detach element that has slide-out class
      // put to the bottom of the list after
      // the last item
      $('.adj:eq(' + i + ')').after($('.slide-out').detach());
      // remove class to send element back to original position
      $('.adj').removeClass('slide-out');
    }

    // build slider
    build(adjs);
    // init loop
    slideIn(getList()[0]);
  }
}
</script>

<style lang="scss" scoped>

.text-slideshow {
  & ::v-deep #sentence {
    overflow: hidden;
    padding: 10px 20px;
    margin-bottom: 0px;
  }
  
  & ::v-deep #sentence > li, & ::v-deep #sentence > ul { display: inline; }
  
  & ::v-deep #textSlider {
    overflow: visible !important;
    text-align: left;
    display: inline;
    position: relative;
    height: 16px;
    padding-left: 0px;
  }
  
  & ::v-deep .adj {
    font-size: 34px;
    color: #00b4d8;
    white-space: nowrap;
    list-style: none;
    position: absolute;
    line-height: .3em;
    -webkit-transform: translateY(60px);
    -ms-transform: translateY(60px);
    transform: translateY(60px);
    
    @media (min-width: 960px) {
      font-size: 45px;
    }
  }

  & ::v-deep .slide-in {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  
  & ::v-deep .slide-out {
    -webkit-transform: translateY(-60px);
    -ms-transform: translateY(-60px);
    transform: translateY(-60px);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
}
</style>