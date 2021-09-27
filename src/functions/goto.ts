class Goto {
    public worksSection(): void {
        const div = document.getElementById('works');
        div && div.scrollIntoView();
    }

    public skillsSection(): void {
        const div = document.getElementById('skills');
        div && div.scrollIntoView();
    }

    public top(): void {
        document.documentElement.scrollTo(0, 0);
    }

    public reload(): void {
        window.location.href = '/';
    }

    public mailTo(): void {
        window.open('mailto:mdsifatulislam.rabbi@gmail.com', '_blank');
    }

    public github() {
        window.open('https://github.com/temujins', '_blank');
    }

    public facebook() {
        window.open('https://facebook.com/ttemujinRabbi', '_blank');
    }

    public linkedIn() {
        window.open('https://www.linkedin.com/in/sifatul-rabbi-6548b921b/', '_blank');
    }
}

export default new Goto();
