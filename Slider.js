class Slider {
    constructor(arrayOfObjects, index = 0){
        this._objects = arrayOfObjects;
        this._currentIndex = index;
    }

    get currentSlide() {
        return this._objects[this._currentIndex]
    }

    set currentIndex(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Index must be a number');
        }
        this._currentIndex = v;
    }

    get currentIndex() {
        return this._currentIndex;
    }

    get prev() {
        return ((this.currentIndex-1 + this._objects.length) % this._objects.length)
    }

    get next() {
        return ((this.currentIndex+1) % this._objects.length)
    }


}