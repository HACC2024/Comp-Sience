import React from 'react';

const Carousel = () => {
    const letterstring = "a,b,c,d,e,f,g,h,i,j,k,l,m,n";
    const letters = letterstring.split(",");
    return (
        <div class="carousel__holder">
            <div id="carouselA" class="carousel">
                {% for item in site.carousels[number].images %}
                <input class="carousel__activator" type="radio" name="carouselA" id="A{{ letters[forloop.index0] }}" {% if forloop.first %}checked="checked"{% endif %} />
                {% endfor %}
                {% for item in site.carousels[number].images %}
                {% if forloop.index == forloop.length %}
                    {% assign nextindex = 0 %}
                {% else %}
                    {% assign nextindex = forloop.index0 | plus: 1 %}
                {% endif %}
                {% assign nextletter = letters[nextindex] %}
                {% if forloop.index0 == 0 %}
                    {% assign previndex = forloop.length | minus: 1 %}
                {% else %}
                    {% assign previndex = forloop.index0 | minus: 1 %}
                {% endif %}
                {% assign prevletter = letters[previndex] %}
                <div class="carousel__controls">
                    <label class="carousel__control carousel__control--backward" for="{{ number }}{{ prevletter }}"></label>
                    <label class="carousel__control carousel__control--forward" for="{{ number }}{{ nextletter }}"></label>
                </div>
                {% endfor %}
                <div class="carousel__track">
                <ul>
                    {% for item in site.carousels[number].images %}
                    <li class="carousel__slide" style="background-image: url('{{ item.image }}');"></li>
                    {% endfor %}
                </ul>
                </div>
                <div class="carousel__indicators">
                    {% for item in site.carousels[number].images %}
                    <label class="carousel__indicator" for="{{ number }}{{ letters[forloop.index0] }}"></label>
                    {% endfor %}
                </div>
            </div>
        </div>

        <style>
        .carousel__holder {width: 100%; position: relative; padding-bottom: {{ include.height }}{{ include.unit }}; margin: 1rem 0 1rem;}
        .carousel {
        height: 100%;
        width: 100%;
        overflow: hidden;
        text-align: center;
        position: absolute;
        padding: 0;
        }
        .carousel__controls,
        .carousel__activator {
        display: none;
        }
        {% for item in site.carousels[number].images %}
        .carousel__activator:nth-of-type({{ forloop.index }}):checked ~ .carousel__track {
        -webkit-transform: translateX(-{{ forloop.index0 }}00%);
                transform: translateX(-{{ forloop.index0 }}00%);
        }
        .carousel__activator:nth-of-type({{ forloop.index }}):checked ~ .carousel__slide:nth-of-type({{ forloop.index }}) {
        transition: opacity 0.5s, -webkit-transform 0.5s;
        transition: opacity 0.5s, transform 0.5s;
        transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
        top: 0;
        left: 0;
        right: 0;
        opacity: 1;
        -webkit-transform: scale(1);
                transform: scale(1);
        }
        .carousel__activator:nth-of-type({{ forloop.index }}):checked ~ .carousel__controls:nth-of-type({{ forloop.index }}) {
        display: block;
        opacity: 1;
        }
        .carousel__activator:nth-of-type({{ forloop.index }}):checked ~ .carousel__indicators .carousel__indicator:nth-of-type({{ forloop.index }}) {
        opacity: 1;
        }
        {% endfor %}

        .carousel__control {
        height: 30px;
        width: 30px;
        margin-top: -15px;
        top: 50%;
        position: absolute;
        display: block;
        cursor: pointer;
        border-width: 5px 5px 0 0;
        border-style: solid;
        border-color: #fafafa;
        opacity: 0.35;
        opacity: 1;
        outline: 0;
        z-index: 3;
        }
        .carousel__control:hover {
        opacity: 1;
        }
        .carousel__control--backward {
        left: 20px;
        -webkit-transform: rotate(-135deg);
                transform: rotate(-135deg);
        }
        .carousel__control--forward {
        right: 20px;
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
        }
        .carousel__indicators {
        position: absolute;
        bottom: 20px;
        width: 100%;
        text-align: center;
        }
        .carousel__indicator {
        height: 15px;
        width: 15px;
        border-radius: 100%;
        display: inline-block;
        z-index: 2;
        cursor: pointer;
        opacity: 0.35;
        margin: 0 2.5px 0 2.5px;
        }
        .carousel__indicator:hover {
        opacity: 0.75;
        }
        .carousel__track {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0;
        margin: 0;
        transition: -webkit-transform 0.5s ease 0s;
        transition: transform 0.5s ease 0s;
        transition: transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s;
        }
        .carousel__track .carousel__slide {
        display: block;
        top: 0;
        left: 0;
        right: 0;
        opacity: 1;
        }
        {% for item in site.carousels[number].images %}
        .carousel__track .carousel__slide:nth-of-type({{ forloop.index }}) {
        -webkit-transform: translateX({{ forloop.index0 }}00%);
                transform: translateX({{ forloop.index0 }}00%);
        }
        {% endfor %}

        .carousel--scale .carousel__slide {
        -webkit-transform: scale(0);
                transform: scale(0);
        }
        .carousel__slide {
        height: 100%;
        position: absolute;
        opacity: 0;
        overflow: hidden;
        }
        .carousel__slide .overlay {height: 100%;}
        .carousel--thumb .carousel__indicator {
        height: 30px;
        width: 30px;
        }
        .carousel__indicator {
        background-color: #fafafa;
        }
        {% for item in site.carousels[number].images %}
        .carousel__slide:nth-of-type({{ forloop.index }}),
        .carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type({{ forloop.index }}) {
        background-size: cover;
        background-position: center;
        }
        {% endfor %}
        </style>

        <script>
        function isVisible(el) {
                while (el) {
                    if (el === document) {
                        return true;
                    }

                    var $style = window.getComputedStyle(el, null);

                    if (!el) {
                        return false;
                    } else if (!$style) {
                        return false;
                    } else if ($style.display === 'none') {
                        return false;
                    } else if ($style.visibility === 'hidden') {
                        return false;
                    } else if (+$style.opacity === 0) {
                        return false;
                    } else if (($style.display === 'block' || $style.display === 'inline-block') &&
                        $style.height === '0px' && $style.overflow === 'hidden') {
                        return false;
                    } else {
                        return $style.position === 'fixed' || isVisible(el.parentNode);
                    }
                }
        }
        {% if include.duration %}
        setInterval(function(){
            var j=0;
            var elements = document.querySelectorAll('#carousel{{ number}} .carousel__control--forward');
            for(i=(elements.length - 1);i>-1;i--) {
            if(isVisible(elements[i])) j=i;
            }
            elements[j].click();
        },{{ include.duration }}000);
        {% endif %}
        </script>
    )

}


export default Carousel;