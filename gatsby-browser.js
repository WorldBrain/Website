require('typeface-inter');

exports.onRouteUpdate = ({ location }) => scrollToAnchor(location)

/**
 *
 * @desc - a function to jump to the correct scroll position
 * @param {Object} location -
 * @param {Number} [mainNavHeight] - the height of any persistent nav -> document.querySelector(`nav`)
 */
function scrollToAnchor(location, mainNavHeight = 0) {
    // Check for location so build does not fail
    if (location && location.hash) {

        // const item2 = document.querySelector(`${location.hash}`)
        setTimeout(() => {
            document.querySelector(`${location.hash}`).scrollIntoView({
                block: 'start',
                behavior: 'smooth',
                alignToTop: true,
            })

            // window.scrollTo({
            //     top: item + 500,
            //     behavior: "smooth",
            // })

        }, 500)

        // console.log(item2)
        // console.log(item)
        // window.scrollTo({
        //     top: item,
        //     behavior: "smooth",
        // })
    }

    return true
}