const creations = [
    {
        id: 3,
        title: 'Soccer team VR',
        imgSrc: 'soccer-team',
        details: 'Despre siccer team',
        imgPathDesktop: '../images/desktop/image-soccer-team.jpg',
        imgPathMobile: '../images/mobile/image-soccer-team.jpg',
    },
    {
        id: 1,
        title: 'Deep Earth',
        imgSrc: 'deep-earth',
        details: 'Despre Deep team'
    },
    {
        id: 2,
        title: 'Night arcade',
        imgSrc: 'night-arcade',
        details: 'Despre arcade team'
    },
    {
        id: 4,
        title: 'The grid',
        imgSrc: 'grid',
        details: 'Despre grid team'
    },
    {
        id: 5,
        title: 'From up above VR',
        imgSrc: 'from-above',
        details: 'Despre From up above VR team'
    },
    {
        id: 6,
        title: 'Pocket borealis',
        imgSrc: 'pocket-borealis',
        details: 'Despre Pocket team'
    },
    {
        id: 7,
        title: 'The curiosity',
        imgPathDesktop: '../images/desktop/image-curiosity.jpg',
        imgPathMobile: '../images/mobile/image-curiosity.jpg',
        imgSrc: 'curiosity',
        details: 'Despre curiosity team'
    },
    {
        id: 8,
        title: 'Make it fisheye',
        imgSrc: 'fisheye',
        details: 'Despre fisheye team'
    }
]

const tempCreationList = [
    {
        id: 3,
        title: 'Soccer team VR',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPathDesktop: '../images/desktop/image-soccer-team.jpg',
        imgPathMobile: '../images/mobile/image-soccer-team.jpg',
    },
    {
        id: 1,
        title: 'Deep Earth',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus. Aliquet sagittis id consectetur purus. Lorem ipsum dolor sit amet consectetur. Viverra tellus in hac habitasse platea. Id aliquet lectus proin nibh nisl condimentum id venenatis. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Mattis aliquam faucibus purus in massa tempor nec. Massa id neque aliquam vestibulum morbi blandit. Purus non enim praesent elementum facilisis leo. Feugiat sed lectus vestibulum mattis ullamcorper velit. Risus nec feugiat in fermentum posuere. Habitant morbi tristique senectus et netus et malesuada fames ac. Arcu dui vivamus arcu felis bibendum ut tristique et. Eget sit amet tellus cras adipiscing. Vitae suscipit tellus mauris a diam maecenas sed. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non sodales neque sodales ut etiam sit amet. Tortor at auctor urna nunc.',
        imgPathDesktop: '../images/desktop/image-deep-earth.jpg',
        imgPathMobile: '../images/mobile/image-deep-earth.jpg',
    },
    {
        id: 2,
        title: 'Night arcade',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Platea dictumst vestibulum rhoncus est pellentesque. Aliquam faucibus purus in massa tempor nec. Id venenatis a condimentum vitae sapien pellentesque. Suspendisse in est ante in nibh. Varius morbi enim nunc faucibus a pellentesque sit. Pellentesque eu tincidunt tortor aliquam nulla. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Enim eu turpis egestas pretium. Ac tincidunt vitae semper quis. Amet dictum sit amet justo donec enim diam. Dui id ornare arcu odio ut sem nulla pharetra diam.',
        imgPathDesktop: '../images/desktop/image-night-arcade.jpg',
        imgPathMobile: '../images/mobile/image-night-arcade.jpg',
    },
    {
        id: 4,
        title: 'The grid',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Vulputate enim nulla aliquet porttitor lacus luctus. Ipsum dolor sit amet consectetur adipiscing elit ut. Quis lectus nulla at volutpat diam ut. Facilisi nullam vehicula ipsum a arcu. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Feugiat nibh sed pulvinar proin gravida. Euismod elementum nisi quis eleifend quam adipiscing. Massa massa ultricies mi quis hendrerit dolor magna eget est. Curabitur vitae nunc sed velit dignissim sodales ut. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Amet volutpat consequat mauris nunc congue nisi vitae. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Euismod lacinia at quis risus sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Dui nunc mattis enim ut tellus elementum sagittis. Pharetra magna ac placerat vestibulum. Enim nulla aliquet porttitor lacus luctus accumsan.',
        imgPathDesktop: '../images/desktop/image-grid.jpg',
        imgPathMobile: '../images/mobile/image-grid.jpg',
    },
    {
        id: 5,
        title: 'From up above VR',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Euismod quis viverra nibh cras pulvinar mattis nunc. Odio ut sem nulla pharetra diam sit amet nisl. Lobortis feugiat vivamus at augue eget arcu dictum. Ac turpis egestas integer eget aliquet nibh praesent. Aliquam ut porttitor leo a diam sollicitudin tempor. Purus in mollis nunc sed id semper risus.',
        imgPathDesktop: '../images/desktop/image-from-above.jpg',
        imgPathMobile: '../images/mobile/image-from-above.jpg',
    },
    {
        id: 6,
        title: 'Pocket borealis',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mattis aliquam faucibus purus in massa. Tincidunt augue interdum velit euismod in pellentesque. Nam libero justo laoreet sit amet. In metus vulputate eu scelerisque. Pharetra vel turpis nunc eget lorem. Vitae auctor eu augue ut lectus arcu bibendum at varius. Sit amet nisl suscipit adipiscing. Non arcu risus quis varius. Sed id semper risus in.',
        imgPathDesktop: '../images/desktop/image-pocket-borealis.jpg',
        imgPathMobile: '../images/mobile/image-pocket-borealis.jpg',
    },
    {
        id: 7,
        title: "The curiosity",
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames. Eget gravida cum sociis natoque penatibus et. Faucibus purus in massa tempor nec feugiat nisl pretium. Metus dictum at tempor commodo. Fringilla phasellus faucibus scelerisque eleifend donec. Commodo sed egestas egestas fringilla. Mauris sit amet massa vitae tortor condimentum lacinia quis. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Adipiscing commodo elit at imperdiet dui accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eu volutpat odio facilisis mauris sit amet massa. Quam elementum pulvinar etiam non quam lacus suspendisse. Ut sem viverra aliquet eget sit amet tellus. Semper risus in hendrerit gravida. In eu mi bibendum neque egestas congue quisque egestas diam. Facilisis leo vel fringilla est. Justo laoreet sit amet cursus sit. Lectus mauris ultrices eros in cursus turpis massa. Cursus in hac habitasse platea dictumst.',
        imgPathDesktop: '../images/desktop/image-curiosity.jpg',
        imgPathMobile: '../images/mobile/image-curiosity.jpg',
    },
    {
        id: 8,
        title: 'Make it fisheye',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Varius quam quisque id diam vel. Leo integer malesuada nunc vel risus commodo. Tortor condimentum lacinia quis vel. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nulla aliquet enim tortor at auctor urna nunc id. Proin nibh nisl condimentum id venenatis a. Quisque non tellus orci ac auctor augue mauris augue. Purus non enim praesent elementum facilisis leo vel fringilla. Elementum nisi quis eleifend quam. Orci dapibus ultrices in iaculis nunc sed augue lacus. Placerat vestibulum lectus mauris ultrices eros in. Pharetra pharetra massa massa ultricies mi. Nam libero justo laoreet sit amet.',
        imgPathDesktop: '../images/desktop/image-fisheye.jpg',
        imgPathMobile: '../images/mobile/image-fisheye.jpg',
    },
    {
        id: 3,
        title: 'Soccer team VR',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPathDesktop: '../images/desktop/image-soccer-team.jpg',
        imgPathMobile: '../images/mobile/image-soccer-team.jpg',
    },
    {
        id: 1,
        title: 'Deep Earth',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus. Aliquet sagittis id consectetur purus. Lorem ipsum dolor sit amet consectetur. Viverra tellus in hac habitasse platea. Id aliquet lectus proin nibh nisl condimentum id venenatis. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Mattis aliquam faucibus purus in massa tempor nec. Massa id neque aliquam vestibulum morbi blandit. Purus non enim praesent elementum facilisis leo. Feugiat sed lectus vestibulum mattis ullamcorper velit. Risus nec feugiat in fermentum posuere. Habitant morbi tristique senectus et netus et malesuada fames ac. Arcu dui vivamus arcu felis bibendum ut tristique et. Eget sit amet tellus cras adipiscing. Vitae suscipit tellus mauris a diam maecenas sed. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non sodales neque sodales ut etiam sit amet. Tortor at auctor urna nunc.',
        imgPathDesktop: '../images/desktop/image-deep-earth.jpg',
        imgPathMobile: '../images/mobile/image-deep-earth.jpg',
    },
    {
        id: 2,
        title: 'Night arcade',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Platea dictumst vestibulum rhoncus est pellentesque. Aliquam faucibus purus in massa tempor nec. Id venenatis a condimentum vitae sapien pellentesque. Suspendisse in est ante in nibh. Varius morbi enim nunc faucibus a pellentesque sit. Pellentesque eu tincidunt tortor aliquam nulla. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Enim eu turpis egestas pretium. Ac tincidunt vitae semper quis. Amet dictum sit amet justo donec enim diam. Dui id ornare arcu odio ut sem nulla pharetra diam.',
        imgPathDesktop: '../images/desktop/image-night-arcade.jpg',
        imgPathMobile: '../images/mobile/image-night-arcade.jpg',
    },
    {
        id: 4,
        title: 'The grid',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Vulputate enim nulla aliquet porttitor lacus luctus. Ipsum dolor sit amet consectetur adipiscing elit ut. Quis lectus nulla at volutpat diam ut. Facilisi nullam vehicula ipsum a arcu. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Feugiat nibh sed pulvinar proin gravida. Euismod elementum nisi quis eleifend quam adipiscing. Massa massa ultricies mi quis hendrerit dolor magna eget est. Curabitur vitae nunc sed velit dignissim sodales ut. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Amet volutpat consequat mauris nunc congue nisi vitae. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Euismod lacinia at quis risus sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Dui nunc mattis enim ut tellus elementum sagittis. Pharetra magna ac placerat vestibulum. Enim nulla aliquet porttitor lacus luctus accumsan.',
        imgPathDesktop: '../images/desktop/image-grid.jpg',
        imgPathMobile: '../images/mobile/image-grid.jpg',
    },
    {
        id: 5,
        title: 'From up above VR',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Euismod quis viverra nibh cras pulvinar mattis nunc. Odio ut sem nulla pharetra diam sit amet nisl. Lobortis feugiat vivamus at augue eget arcu dictum. Ac turpis egestas integer eget aliquet nibh praesent. Aliquam ut porttitor leo a diam sollicitudin tempor. Purus in mollis nunc sed id semper risus.',
        imgPathDesktop: '../images/desktop/image-from-above.jpg',
        imgPathMobile: '../images/mobile/image-from-above.jpg',
    },
    {
        id: 6,
        title: 'Pocket borealis',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mattis aliquam faucibus purus in massa. Tincidunt augue interdum velit euismod in pellentesque. Nam libero justo laoreet sit amet. In metus vulputate eu scelerisque. Pharetra vel turpis nunc eget lorem. Vitae auctor eu augue ut lectus arcu bibendum at varius. Sit amet nisl suscipit adipiscing. Non arcu risus quis varius. Sed id semper risus in.',
        imgPathDesktop: '../images/desktop/image-pocket-borealis.jpg',
        imgPathMobile: '../images/mobile/image-pocket-borealis.jpg',
    },
    {
        id: 7,
        title: "The curiosity",
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames. Eget gravida cum sociis natoque penatibus et. Faucibus purus in massa tempor nec feugiat nisl pretium. Metus dictum at tempor commodo. Fringilla phasellus faucibus scelerisque eleifend donec. Commodo sed egestas egestas fringilla. Mauris sit amet massa vitae tortor condimentum lacinia quis. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Adipiscing commodo elit at imperdiet dui accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eu volutpat odio facilisis mauris sit amet massa. Quam elementum pulvinar etiam non quam lacus suspendisse. Ut sem viverra aliquet eget sit amet tellus. Semper risus in hendrerit gravida. In eu mi bibendum neque egestas congue quisque egestas diam. Facilisis leo vel fringilla est. Justo laoreet sit amet cursus sit. Lectus mauris ultrices eros in cursus turpis massa. Cursus in hac habitasse platea dictumst.',
        imgPathDesktop: '../images/desktop/image-curiosity.jpg',
        imgPathMobile: '../images/mobile/image-curiosity.jpg',
    },
    {
        id: 8,
        title: 'Make it fisheye',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Varius quam quisque id diam vel. Leo integer malesuada nunc vel risus commodo. Tortor condimentum lacinia quis vel. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nulla aliquet enim tortor at auctor urna nunc id. Proin nibh nisl condimentum id venenatis a. Quisque non tellus orci ac auctor augue mauris augue. Purus non enim praesent elementum facilisis leo vel fringilla. Elementum nisi quis eleifend quam. Orci dapibus ultrices in iaculis nunc sed augue lacus. Placerat vestibulum lectus mauris ultrices eros in. Pharetra pharetra massa massa ultricies mi. Nam libero justo laoreet sit amet.',
        imgPathDesktop: '../images/desktop/image-fisheye.jpg',
        imgPathMobile: '../images/mobile/image-fisheye.jpg',
    },
    {
        id: 3,
        title: 'Soccer team VR',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPathDesktop: '../images/desktop/image-soccer-team.jpg',
        imgPathMobile: '../images/mobile/image-soccer-team.jpg',
    },
    {
        id: 1,
        title: 'Deep Earth',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus. Aliquet sagittis id consectetur purus. Lorem ipsum dolor sit amet consectetur. Viverra tellus in hac habitasse platea. Id aliquet lectus proin nibh nisl condimentum id venenatis. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Mattis aliquam faucibus purus in massa tempor nec. Massa id neque aliquam vestibulum morbi blandit. Purus non enim praesent elementum facilisis leo. Feugiat sed lectus vestibulum mattis ullamcorper velit. Risus nec feugiat in fermentum posuere. Habitant morbi tristique senectus et netus et malesuada fames ac. Arcu dui vivamus arcu felis bibendum ut tristique et. Eget sit amet tellus cras adipiscing. Vitae suscipit tellus mauris a diam maecenas sed. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non sodales neque sodales ut etiam sit amet. Tortor at auctor urna nunc.',
        imgPathDesktop: '../images/desktop/image-deep-earth.jpg',
        imgPathMobile: '../images/mobile/image-deep-earth.jpg',
    },
    {
        id: 2,
        title: 'Night arcade',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Platea dictumst vestibulum rhoncus est pellentesque. Aliquam faucibus purus in massa tempor nec. Id venenatis a condimentum vitae sapien pellentesque. Suspendisse in est ante in nibh. Varius morbi enim nunc faucibus a pellentesque sit. Pellentesque eu tincidunt tortor aliquam nulla. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Enim eu turpis egestas pretium. Ac tincidunt vitae semper quis. Amet dictum sit amet justo donec enim diam. Dui id ornare arcu odio ut sem nulla pharetra diam.',
        imgPathDesktop: '../images/desktop/image-night-arcade.jpg',
        imgPathMobile: '../images/mobile/image-night-arcade.jpg',
    },
    {
        id: 4,
        title: 'The grid',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Vulputate enim nulla aliquet porttitor lacus luctus. Ipsum dolor sit amet consectetur adipiscing elit ut. Quis lectus nulla at volutpat diam ut. Facilisi nullam vehicula ipsum a arcu. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Feugiat nibh sed pulvinar proin gravida. Euismod elementum nisi quis eleifend quam adipiscing. Massa massa ultricies mi quis hendrerit dolor magna eget est. Curabitur vitae nunc sed velit dignissim sodales ut. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Amet volutpat consequat mauris nunc congue nisi vitae. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Euismod lacinia at quis risus sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Dui nunc mattis enim ut tellus elementum sagittis. Pharetra magna ac placerat vestibulum. Enim nulla aliquet porttitor lacus luctus accumsan.',
        imgPathDesktop: '../images/desktop/image-grid.jpg',
        imgPathMobile: '../images/mobile/image-grid.jpg',
    },
    {
        id: 5,
        title: 'From up above VR',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Euismod quis viverra nibh cras pulvinar mattis nunc. Odio ut sem nulla pharetra diam sit amet nisl. Lobortis feugiat vivamus at augue eget arcu dictum. Ac turpis egestas integer eget aliquet nibh praesent. Aliquam ut porttitor leo a diam sollicitudin tempor. Purus in mollis nunc sed id semper risus.',
        imgPathDesktop: '../images/desktop/image-from-above.jpg',
        imgPathMobile: '../images/mobile/image-from-above.jpg',
    },
    {
        id: 6,
        title: 'Pocket borealis',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mattis aliquam faucibus purus in massa. Tincidunt augue interdum velit euismod in pellentesque. Nam libero justo laoreet sit amet. In metus vulputate eu scelerisque. Pharetra vel turpis nunc eget lorem. Vitae auctor eu augue ut lectus arcu bibendum at varius. Sit amet nisl suscipit adipiscing. Non arcu risus quis varius. Sed id semper risus in.',
        imgPathDesktop: '../images/desktop/image-pocket-borealis.jpg',
        imgPathMobile: '../images/mobile/image-pocket-borealis.jpg',
    },
    {
        id: 7,
        title: "The curiosity",
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames. Eget gravida cum sociis natoque penatibus et. Faucibus purus in massa tempor nec feugiat nisl pretium. Metus dictum at tempor commodo. Fringilla phasellus faucibus scelerisque eleifend donec. Commodo sed egestas egestas fringilla. Mauris sit amet massa vitae tortor condimentum lacinia quis. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Adipiscing commodo elit at imperdiet dui accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eu volutpat odio facilisis mauris sit amet massa. Quam elementum pulvinar etiam non quam lacus suspendisse. Ut sem viverra aliquet eget sit amet tellus. Semper risus in hendrerit gravida. In eu mi bibendum neque egestas congue quisque egestas diam. Facilisis leo vel fringilla est. Justo laoreet sit amet cursus sit. Lectus mauris ultrices eros in cursus turpis massa. Cursus in hac habitasse platea dictumst.',
        imgPathDesktop: '../images/desktop/image-curiosity.jpg',
        imgPathMobile: '../images/mobile/image-curiosity.jpg',
    },
    {
        id: 8,
        title: 'Make it fisheye',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Varius quam quisque id diam vel. Leo integer malesuada nunc vel risus commodo. Tortor condimentum lacinia quis vel. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nulla aliquet enim tortor at auctor urna nunc id. Proin nibh nisl condimentum id venenatis a. Quisque non tellus orci ac auctor augue mauris augue. Purus non enim praesent elementum facilisis leo vel fringilla. Elementum nisi quis eleifend quam. Orci dapibus ultrices in iaculis nunc sed augue lacus. Placerat vestibulum lectus mauris ultrices eros in. Pharetra pharetra massa massa ultricies mi. Nam libero justo laoreet sit amet.',
        imgPathDesktop: '../images/desktop/image-fisheye.jpg',
        imgPathMobile: '../images/mobile/image-fisheye.jpg',
    },
    {
        id: 3,
        title: 'Soccer team VR',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPathDesktop: '../images/desktop/image-soccer-team.jpg',
        imgPathMobile: '../images/mobile/image-soccer-team.jpg',
    },
    {
        id: 1,
        title: 'Deep Earth',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus. Aliquet sagittis id consectetur purus. Lorem ipsum dolor sit amet consectetur. Viverra tellus in hac habitasse platea. Id aliquet lectus proin nibh nisl condimentum id venenatis. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Mattis aliquam faucibus purus in massa tempor nec. Massa id neque aliquam vestibulum morbi blandit. Purus non enim praesent elementum facilisis leo. Feugiat sed lectus vestibulum mattis ullamcorper velit. Risus nec feugiat in fermentum posuere. Habitant morbi tristique senectus et netus et malesuada fames ac. Arcu dui vivamus arcu felis bibendum ut tristique et. Eget sit amet tellus cras adipiscing. Vitae suscipit tellus mauris a diam maecenas sed. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non sodales neque sodales ut etiam sit amet. Tortor at auctor urna nunc.',
        imgPathDesktop: '../images/desktop/image-deep-earth.jpg',
        imgPathMobile: '../images/mobile/image-deep-earth.jpg',
    },
    {
        id: 2,
        title: 'Night arcade',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Platea dictumst vestibulum rhoncus est pellentesque. Aliquam faucibus purus in massa tempor nec. Id venenatis a condimentum vitae sapien pellentesque. Suspendisse in est ante in nibh. Varius morbi enim nunc faucibus a pellentesque sit. Pellentesque eu tincidunt tortor aliquam nulla. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Enim eu turpis egestas pretium. Ac tincidunt vitae semper quis. Amet dictum sit amet justo donec enim diam. Dui id ornare arcu odio ut sem nulla pharetra diam.',
        imgPathDesktop: '../images/desktop/image-night-arcade.jpg',
        imgPathMobile: '../images/mobile/image-night-arcade.jpg',
    },
    {
        id: 4,
        title: 'The grid',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Vulputate enim nulla aliquet porttitor lacus luctus. Ipsum dolor sit amet consectetur adipiscing elit ut. Quis lectus nulla at volutpat diam ut. Facilisi nullam vehicula ipsum a arcu. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Feugiat nibh sed pulvinar proin gravida. Euismod elementum nisi quis eleifend quam adipiscing. Massa massa ultricies mi quis hendrerit dolor magna eget est. Curabitur vitae nunc sed velit dignissim sodales ut. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Amet volutpat consequat mauris nunc congue nisi vitae. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Euismod lacinia at quis risus sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Dui nunc mattis enim ut tellus elementum sagittis. Pharetra magna ac placerat vestibulum. Enim nulla aliquet porttitor lacus luctus accumsan.',
        imgPathDesktop: '../images/desktop/image-grid.jpg',
        imgPathMobile: '../images/mobile/image-grid.jpg',
    },
    {
        id: 5,
        title: 'From up above VR',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo donec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Euismod quis viverra nibh cras pulvinar mattis nunc. Odio ut sem nulla pharetra diam sit amet nisl. Lobortis feugiat vivamus at augue eget arcu dictum. Ac turpis egestas integer eget aliquet nibh praesent. Aliquam ut porttitor leo a diam sollicitudin tempor. Purus in mollis nunc sed id semper risus.',
        imgPathDesktop: '../images/desktop/image-from-above.jpg',
        imgPathMobile: '../images/mobile/image-from-above.jpg',
    },
    {
        id: 6,
        title: 'Pocket borealis',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mattis aliquam faucibus purus in massa. Tincidunt augue interdum velit euismod in pellentesque. Nam libero justo laoreet sit amet. In metus vulputate eu scelerisque. Pharetra vel turpis nunc eget lorem. Vitae auctor eu augue ut lectus arcu bibendum at varius. Sit amet nisl suscipit adipiscing. Non arcu risus quis varius. Sed id semper risus in.',
        imgPathDesktop: '../images/desktop/image-pocket-borealis.jpg',
        imgPathMobile: '../images/mobile/image-pocket-borealis.jpg',
    },
    {
        id: 7,
        title: "The curiosity",
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames. Eget gravida cum sociis natoque penatibus et. Faucibus purus in massa tempor nec feugiat nisl pretium. Metus dictum at tempor commodo. Fringilla phasellus faucibus scelerisque eleifend donec. Commodo sed egestas egestas fringilla. Mauris sit amet massa vitae tortor condimentum lacinia quis. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Adipiscing commodo elit at imperdiet dui accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eu volutpat odio facilisis mauris sit amet massa. Quam elementum pulvinar etiam non quam lacus suspendisse. Ut sem viverra aliquet eget sit amet tellus. Semper risus in hendrerit gravida. In eu mi bibendum neque egestas congue quisque egestas diam. Facilisis leo vel fringilla est. Justo laoreet sit amet cursus sit. Lectus mauris ultrices eros in cursus turpis massa. Cursus in hac habitasse platea dictumst.',
        imgPathDesktop: '../images/desktop/image-curiosity.jpg',
        imgPathMobile: '../images/mobile/image-curiosity.jpg',
    },
    {
        id: 8,
        title: 'Make it fisheye',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Varius quam quisque id diam vel. Leo integer malesuada nunc vel risus commodo. Tortor condimentum lacinia quis vel. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nulla aliquet enim tortor at auctor urna nunc id. Proin nibh nisl condimentum id venenatis a. Quisque non tellus orci ac auctor augue mauris augue. Purus non enim praesent elementum facilisis leo vel fringilla. Elementum nisi quis eleifend quam. Orci dapibus ultrices in iaculis nunc sed augue lacus. Placerat vestibulum lectus mauris ultrices eros in. Pharetra pharetra massa massa ultricies mi. Nam libero justo laoreet sit amet.',
        imgPathDesktop: '../images/desktop/image-fisheye.jpg',
        imgPathMobile: '../images/mobile/image-fisheye.jpg',
    },
    {
        id: 8,
        title: 'Make it fisheye',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Varius quam quisque id diam vel. Leo integer malesuada nunc vel risus commodo. Tortor condimentum lacinia quis vel. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nulla aliquet enim tortor at auctor urna nunc id. Proin nibh nisl condimentum id venenatis a. Quisque non tellus orci ac auctor augue mauris augue. Purus non enim praesent elementum facilisis leo vel fringilla. Elementum nisi quis eleifend quam. Orci dapibus ultrices in iaculis nunc sed augue lacus. Placerat vestibulum lectus mauris ultrices eros in. Pharetra pharetra massa massa ultricies mi. Nam libero justo laoreet sit amet.',
        imgPathDesktop: '../images/desktop/image-fisheye.jpg',
        imgPathMobile: '../images/mobile/image-fisheye.jpg',
    },
    {
        id: 8,
        title: 'Make it fisheye',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Varius quam quisque id diam vel. Leo integer malesuada nunc vel risus commodo. Tortor condimentum lacinia quis vel. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nulla aliquet enim tortor at auctor urna nunc id. Proin nibh nisl condimentum id venenatis a. Quisque non tellus orci ac auctor augue mauris augue. Purus non enim praesent elementum facilisis leo vel fringilla. Elementum nisi quis eleifend quam. Orci dapibus ultrices in iaculis nunc sed augue lacus. Placerat vestibulum lectus mauris ultrices eros in. Pharetra pharetra massa massa ultricies mi. Nam libero justo laoreet sit amet.',
        imgPathDesktop: '../images/desktop/image-fisheye.jpg',
        imgPathMobile: '../images/mobile/image-fisheye.jpg',
    }
]

const creationList = tempCreationList.map((item, index) =>{
    return {
        id: "id-" + index,
        title: item.title,
        details: item.details,
        imgPathDesktop: item.imgPathDesktop,
        imgPathMobile: item.imgPathMobile,
    }
})

// localStorage.setItem('creationList', JSON.stringify(creations));
localStorage.setItem('creationList', JSON.stringify(creationList));

const prevCart = localStorage.getItem('cart');
if(prevCart){
    localStorage.setItem('cart', prevCart);
} else{
    localStorage.setItem('cart', JSON.stringify({}));
}


// delay call
// setTimeout(() =>{
     // redirecteaza la pagina mainPage.html
// }, 1000);
