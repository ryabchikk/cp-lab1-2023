import {Cache} from "../src/cache";

test('it fails', () => {
    expect(false).toBe(true);
});

test('test paremetr key', () =>{
    expect(new Cache().add(-1,1,1)).toBe(false);
    expect(new Cache().add(null,1,1)).toBe(false);
    expect(new Cache().add("",1,1)).toBe(false);
    expect(new Cache().add(undefined,1,1)).toBe(false);

    expect(new Cache().add(1,1,1)).toBe(true);
});

test('test paremetr value', () =>{
    expect(new Cache().add(1,-1,1)).toBe(false);
    expect(new Cache().add(1,null,1)).toBe(false);
    expect(new Cache().add(1,"",1)).toBe(false);
    expect(new Cache().add(1,undefined,1)).toBe(false);

    expect(new Cache().add(836745,3245,34)).toBe(true);
});

test('test paremetr count', () =>{
    expect(new Cache().add(0,0,0)).toBe(false);
    expect(new Cache().add(1,1,-1)).toBe(false);
    expect(new Cache().add(1,1,null)).toBe(false);
    expect(new Cache().add(1,1,"")).toBe(false);
    expect(new Cache().add(1,1,undefined)).toBe(false);
    expect(new Cache().add(1,1,"1")).toBe(false);
    expect(new Cache().add(1,1,'1')).toBe(false);

    expect(new Cache().add(10,123,11)).toBe(true);
});

test('test get_cache params',() =>{
    expect(new Cache().get_cache(-1)).toBeNull();
    expect(new Cache().get_cache(null)).toBeNull();
    expect(new Cache().get_cache("")).toBeNull();
    expect(new Cache().get_cache(undefined)).toBeNull();
})

test('test get_statistic params', () =>{
    expect(new Cache().get_statistic()).toBeNull();
})

test('test get_statistic result', () =>{
    
    const cache = new Cache();
    cache.add(1,1,1);

    expect(cache.get_statistic()).toBe(!null);
    expect(cache.get_statistic()).toBe([{'key': 1,'value':1,'count':1}]);
})

