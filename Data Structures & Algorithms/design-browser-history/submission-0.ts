class BrowserHistory {
    private currentIndex: number = 0
    private history: string[] = []
    
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.history.push(homepage)
    }

    public get currentPage(): string | undefined {
        return this.history[this.currentIndex]
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url): void {
        this.currentIndex += 1
        this.history[this.currentIndex] = url
        this.history.length = this.currentIndex + 1 

    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps): string | undefined {
        this.currentIndex = Math.max(this.currentIndex - steps, 0)
        return this.currentPage
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps): string | undefined {
        this.currentIndex = Math.min(this.currentIndex + steps, this.history.length - 1)
        return this.currentPage
    }
}
