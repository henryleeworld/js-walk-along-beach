// Animation created for Skillshare class on Animating SVG https://skl.sh/2SgBfAR

// Beach Ball
TweenMax.to("#ball-group", 30, {x:-1700, repeat:-1, ease: Power0.easeNone, repeatDelay:10})
TweenMax.to("#ball", 30, {rotation:"-4000deg", repeat:-1, transformOrigin: "center center",  ease: Power0.easeNone, repeatDelay:10})

// Sun
TweenMax.to("#sun-band-1, #sun-band-2", 4, {scale:1.3, transformOrigin: "center center", repeat:-1, yoyo:true})
TweenMax.set("#sun-group", {x:1150})

// Fence
TweenMax.to("#fence-1, #fence-2", 4, {x:-1500, repeat:-1, ease: Power0.easeNone})

// Waves
TweenMax.to("#wave-group", 20, {x:-2000, repeat:-1, ease: Power0.easeNone})
TweenMax.to("#wave-group", 5, {scaleY:.5, repeat:-1, yoyo:true, ease: Power1.easeInOut, transformOrigin:"top center"})

// Rocks
TweenMax.to("#rocks-1, #rocks-2", 60, {x:-1500, repeat:-1, ease: Power0.easeNone})

// Clouds
TweenMax.to("#clouds-1, #clouds-2", 100, {x:-2000, repeat:-1, ease: Power0.easeNone})

// Islands
TweenMax.to("#islands-1, #islands-2", 200, {x:-1500, repeat:-1, ease:Power0.easeNone})

// Surfboards
TweenMax.to("#surfboard-1", 20, {x:-2000, ease:Power0.easeNone, repeat:-1, delay:20, repeatDelay:30})
TweenMax.to("#surfboard-2", 20, {x:-2000, ease:Power0.easeNone, repeat:-1, repeatDelay:30})

// Bird
TweenMax.to("#bird", 8, {x:-2000, repeat:-1, })
TweenMax.to("#bird", 3, {y:200, repeat:-1, yoyo:true, ease: Power1.easeInOut, repeatDelay:7})
TweenMax.to("#front-wing, #back-wing", 1, {scaleY: -1.1, repeat:-1, transformOrigin:"bottom center", yoyo:true})