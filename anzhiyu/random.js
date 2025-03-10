var posts=["2025/03/07/pytorch学习笔记1/","2025/03/03/hello-world/","2025/03/07/计算机组成原理学习笔记(1)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };