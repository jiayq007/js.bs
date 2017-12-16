# js.bs is a node.js scripting language encryption module
To provide macOS version and Linux version of the security node.js execution environment, please replace the root node program (macOS version).

# Implementation principle:
Modify the source code of node.js, compiled node can perform encrypted javascript function.

# Features:
* Node.js uses v8 as the engine for handling javascript. When loading javascript at run time, it can not be precompiled into bytecode just like java and python, but it generally uses javascript to streak the server, which brings convenience to hackers. Hundreds of thousands or even millions of project code input, in the operation and maintenance personnel accidentally or under system leaks, this code system is very fragile. Here javascript encrypted by encryption algorithm, using a safe node.js execution environment, the decryption process in the node.js kernel, making javascript very safe to be loaded into v8 memory. At the same time, the security node.js execution environment to modify the debug interface, the use of ordinary debugging parameters will not be able to open the debug, so as to ensure the security of the code.
* In team development, some of the code to be protected is included in the encrypted javascript, which is named {filename} .js.bs. Team members only need to care about their own logic, usually without encryption javascript, the file name is {filename} .js. The secure node.js execution environment allows programming of {filename} .js.bs and {filename} .js, which makes it safe to deliver sensitive information.
* Secure node.js execution environment support for pseudocode, which actually runs {filename} .js.bs when {filename} .js.bs and {filename} .js exist, this time {filename} .js That is {filename} .js.bs pseudocode. However, when the pseudo-code is modified, the situation has changed, the secure node.js will now execute the pseudocode {filename} .js instead of executing {filename} .js.bs.

# Instructions:
* {filename} .js.js Encrypted code
* {filename} .js.bs Encrypted code
* {filename} .js pseudo-code
* Encryption process:
    * {filename} .js {filename} .js.js -> Command: node bs_gen.js -> {filename} .js.bs
* Use process:
    * ./node {filename} .js

# js.bs 是一种node.js脚本语言加密模块
提供macOS版本和Linux版本安全的node.js执行环境，请自行替换根目录node程序（macOS版本）。

# 实现原理：
修改node.js的源代码，编译出能执行加密后的javascript功能的node。

# 功能：
* node.js使用v8作为处理javascript的引擎，运行时加载javascript，它不能同java、python一样预编译成字节码，而一般使用javascript源码裸奔在服务器上，这给黑客带来了便利，一个投入数十万甚至上百万的项目代码，在运维人员不小心或系统漏洞下被泄漏，这种代码体系非常脆弱。在这里javascript通过加密算法进行加密，使用一种安全的node.js执行环境运行，解密过程在node.js内核中进行，使得javascript非常安全的被加载到v8内存。同时安全的node.js执行环境修改了调试接口，使用普通调试参数将无法打开调试，从而保证代码的安全性。
* 在团队开发中，部分需要被保护的代码被包含在加密后的javascript中，这种被加密的javascript一般文件取名为{filename}.js.bs。团队成员只需要关心自己的逻辑部分，一般是没有加密的javascript，文件名为{filename}.js。安全的node.js执行环境允许混合{filename}.js.bs和{filename}.js编程，这使得交付具有敏感信息的代码具有安全性。
* 安全的node.js执行环境对伪代码支持，当{filename}.js.bs和{filename}.js同时存在时，实际上会运行{filename}.js.bs，这时候{filename}.js即为{filename}.js.bs的伪代码。但是，当伪代码被修改后，情况发生了变化，安全的node.js这时候会执行伪代码{filename}.js而不是执行{filename}.js.bs。

# 使用方法：
* {filename}.js.js	被加密代码
* {filename}.js.bs	加密后代码
* {filename}.js		伪代码
* 加密过程：
    * {filename}.js {filename}.js.js -->  Command:node bs_gen.js --> {filename}.js.bs
* 使用过程：
    *  ./node {filename}.js
