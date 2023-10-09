class Cache{
    
    cache_map= new Map(); 
    
    add(key, value, count) 
    {
        if(this.#check_param(key) && this.#check_param(value) && this.#check_param(count)){
            this.cache_map.set(key, [value, count]);

            return true;
        }

        return false;
    }

    get_cache(key)
    {
        if(this.cache_map.get(key)==null){
        
            return null;
        }
        else{

            const mas = this.cache_map.get(key);
            mas[1]--;

            if(mas[1]==0) {
                this.cache_map.delete(key);
            }
            else {
                this.cache_map.set(key,mas);
            }

            return mas[0];
        }

    }

    get_statistic()
    {
        const mas = new Array();

        for (let [key, value] of this.cache_map) {
            mas.push({'key': key,'value':value[0],'count':value[1]});
        }

        if(mas.length!=0){
            return mas;
        }
        
        return null;
    }

    #check_param(param) {
        if(param && param>0 && typeof param === 'number'){
            return true;
        }
        else{
            false
        }
    } 
}
export {Cache}
