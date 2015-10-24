let demo1={
    code:`
<md-footer>
    <md-footer-content slot="main" :options="demo1.content"></md-footer-content>
    <md-footer-links slot="main" :options="demo1.links"></md-footer-links>
    <md-footer-copyright slot="copyright" :options="demo1.copr"></md-footer-copyright>
</md-footer>`,

    options:`
demo1:{
        content:{
            col:'s12 l6',
            title:'Title1',
            text:'this is content1',
            titleClass:"white-text",
            textClass:"white-text"
        },
        links:{
            col:'s12 l6',
            title:'Links',
            links:[{href:"#!/footer",text:"Footer"}],
            titleClass:"white-text",
            linkClass:"white-text"
        },
        copr:{
            text:"© 2015 Vue-material, All rights reserved.",
            link:{
                href:"https://github.com/ElvisKang/vue-material",
                text:"Github",
                linkClass:"white-text"
            }
        }
    }`
};

let demo2={
    code:`
<md-footer>
        <md-footer-content slot="main" :options="{col:'l4 s12'}">
            <p>Another Content</p>
            <h5 slot="title">Title1</h5>
            <p slot="text" class="">Content</p>
            <md-btn class="red" >Code2</md-btn>
        </md-footer-content>
        <md-footer-content slot="main" :options="{col:'l4 s12'}">
            <h5 slot="title">Title2</h5>
            <p slot="text" class="">Content2</p>
        </md-footer-content>
        <md-footer-links slot="main"  :options="{col:'l4 s12'}">
            <h5 slot="title" class="white-text">Title3</h5>
            <ul slot="links">
                <li><a href="#!/footer"  class="white-text">Footer</a></li>                
            </ul>
        </md-footer-links>
        <md-footer-copyright slot="copyright">
            <span>© 2015 Vue-material, All rights reserved.</span>
            <a href="https://github.com/ElvisKang/vue-material" class="white-text right">Github</a>
        </md-footer-copyright>
</md-footer>`
};

export default {
    demo1,
    demo2
}
