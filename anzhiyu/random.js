var posts=["2025/03/10/PyTorch学习笔记(2)/","2025/03/07/PyTorch学习笔记(1)/","2025/03/10/PyTorch学习笔记(3)/","2025/03/03/hello-world/","2025/03/07/计算机组成原理学习笔记(1)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };