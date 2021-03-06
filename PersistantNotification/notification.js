

self.registeration.showNotification('title',{
    body: 'body text',
    badge: 'http://www.endlessicons.com/wp-content/uploads/2012/10/badge-icon-614x460.png',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_FbTmkdO6kdqD16ci_Vn4p4P6NoHS4D0l6wYptIfmK5t5KaU',
    image: './images/mstile-150x150.png',
    tag:'foo', //so multiple notif with same tag appear once
    rentoify: true,//vibrate or make a sound if new notif with same tag appears
    data: {'obj': 'hello data'},

    requireInteraction: true,//will stay till action
    actions: [{
      //max actions true
      //they are kind of buttons
      //helpful in persistant
      action: 'accept',
      title: 'Accept offer',
      icon: './images/favicon-16x16.png'
    },
    {
      //they are kind of buttons
      //helpful in persistant
      action: 'reject',
      title: 'Reject offer',
      icon: './images/favicon-16x16.png'
    }],
    silent: false,
    sound:'',//no browser support
    vibrate: [200, 100, 200], //super mario theme
    dir: 'rtl',
    lang: 'en-us',
    timestamp: Date.now
    


  })


if(Notification.permission === 'granted'){
  showNotification();
}
if(Notification.permission !== 'denied'){
  Notification.requestPermission().then((p)=>{
    if(p=='granted') showNotification();
  })
}

function showNotification(){
  console.log('show notiffff');
  var n = new Notification('title',{
    body: 'body text',
    badge: 'http://www.endlessicons.com/wp-content/uploads/2012/10/badge-icon-614x460.png',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_FbTmkdO6kdqD16ci_Vn4p4P6NoHS4D0l6wYptIfmK5t5KaU',
    image: './images/mstile-150x150.png',
    tag:'foo', //so multiple notif with same tag appear once
    rentoify: true,//vibrate or make a sound if new notif with same tag appears
    data: {'obj': 'hello data'},

    requireInteraction: true,//will stay till action
    // actions: [{
    //   //max actions true
    //   //they are kind of buttons
    //   //helpful in persistant
    //   action: 'accept',
    //   title: 'Accept offer',
    //   icon: './images/favicon-16x16.png'
    // },
    // {
    //   //they are kind of buttons
    //   //helpful in persistant
    //   action: 'reject',
    //   title: 'Reject offer',
    //   icon: './images/favicon-16x16.png'
    // }],
    silent: false,
    sound:'',//no browser support
    vibrate: [200, 100, 200], //super mario theme
    dir: 'rtl',
    lang: 'en-us',
    timestamp: Date.now
    


  });
self.addEventListener('notificationclick',evt=>{
    if(!evt.action){
        console.log('notification clicked');
    }
})
}