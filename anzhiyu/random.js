var posts=["2025/03/17/CSAPP学习笔记(2)/","2025/03/10/PyTorch学习笔记(2)/","2025/03/07/PyTorch学习笔记(1)/","2025/03/13/CSAPP学习笔记(1)/","2025/03/11/PyTorch学习笔记(4)/","2025/03/13/PyTorch学习笔记(5)/","2025/03/14/PyTorch学习笔记(6)/","2025/03/15/PyTorch学习笔记(7)/","2025/03/17/PyTorch学习笔记(9)/","2025/03/15/PyTorch学习笔记(8)/","2025/03/10/PyTorch学习笔记(3)/","2025/03/23/PyTorch实践案例1/","2025/03/14/电动力学学习笔记(1)/","2025/03/19/电动力学学习笔记(2)/","2025/03/21/电动力学学习笔记(3)/","2025/03/07/计算机组成原理学习笔记(1)/","2025/03/14/计算机组成原理学习笔记(2)/","2025/03/28/电动力学学习笔记(4)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };