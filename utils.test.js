const { addCssClass, removeCssClass } = require("./utils");

describe('addCssClass', () => {
    test('should add a new class', () => {
        //preparation
        const el = {
          className: 'joke new',
        };
      
        //action
        addCssClass(el, 'active');
      
        //check
        expect(el.className).toBe('joke new active');
    });
      
    test("should not add an existing class", () => {
        const el = {
          className: "joke new",
        };
      
        addCssClass(el, "new");
      
        expect(el.className).toBe("joke new");
    });
      
    test("should add class which is part of anather class", () => {
        const el = {
          className: "joke new",
        };
      
        addCssClass(el, "ok");
      
        expect(el.className).toBe("joke new ok");
    });
      
    test("should remove extra outer spaces", () => {
        const el = {
          className: "   joke new   ",
        };
      
        addCssClass(el, "ok");
      
        expect(el.className).toBe("joke new ok");
    });
      
    test("should remove extra inner spaces", () => {
        const el = {
          className: "joke    new",
        };
      
        addCssClass(el, "ok");
      
        expect(el.className).toBe("joke new ok");
    });
      
    test("should remove extra spaces when alredy existing class", () => {
        const el = {
          className: "joke    new",
        };
      
        addCssClass(el, "new");
      
        expect(el.className).toBe("joke new");
    });
      
    test('should remove any existing duplicates', () => {
        const el = {
          className: 'joke    new  joke new new',
        };
      
        addCssClass(el, 'ok');
      
        expect(el.className).toBe('joke new ok');
    });

    it('should throw an error if element is missing className', () => {
        const el = {};

        expect(() => {
            addCssClass(el, 'active')
        }).toThrow();
    })

    it('should throw an error if className is not a string', () => {
        const el = {
            className: 1
        };

        expect(() => {
            addCssClass(el, 'active')
        }).toThrow();
    })
});

describe('removeCssClass', () => {
    test('should remove class', () => {
        const el = {
          className: 'joke new',
        };
        
        removeCssClass(el, 'new');
        
        expect(el.className).toBe('joke');
     });

    test('should remove extra spaces', () => {
        const el = {
          className: '    joke    new    ',
        };
        
        removeCssClass(el, 'joke');
        
        expect(el.className).toBe('new');
    });

    test('should remove duplicate of existing class', () => {
        const el = {
          className: 'joke new joke new',
        };
        
        removeCssClass(el, 'new');
        
        expect(el.className).toBe('joke');
    });

    it('should remove duplicate of other classes', () => {
        const el = {
          className: 'joke new joke new',
        };
        
        removeCssClass(el, 'hello');
        
        expect(el.className).toBe('joke new');
    });
});

