var posts=["2026/03/02/hello-world/","2026/03/12/Keil5新建工程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };