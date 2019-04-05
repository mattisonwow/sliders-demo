let $button = $('#buttonWrapper>li')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides.call()
mutiEvents.call()




let timer = setInterval(() => {
    goToSlide(current + 1)
}, 3000)
$('.cover').on('mouseenter', () => {
    window.clearInterval(timer)
}).on('mouseleave', () => {
    timer = setInterval(() => {
        goToSlide(current + 1)
    }, 3000)
})




function mutiEvents() {
    $('#buttonWrapper').on('click', 'li', function (xx) {
        let $button = $(xx.currentTarget)
        let index = $button.index() + 1
        goToSlide(index)
    })
}





function goToSlide(index) {
    if (index > $button.length) {
        index = 1
    } else if (index < 1) {
        index = $button.length
    }
    if (current === $button.length && index === 1) {

        $slides.css({ transform: `translateX(${-($button.length + 1) * 698}px)` })
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({ transform: `translateX(${-index * 698}px)` }).show()
            })
    } else if (current === 1 && index === $button.length) {
        $slides.css({ transform: `translateX(0px)` })
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({ transform: `translateX(${-index * 698}px)` }).show()
            })
    } else {
        $slides.css({ transform: `translateX(${-index * 698}px)` })
    }
    current = index

}

function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    $slides.append($firstCopy)
}
