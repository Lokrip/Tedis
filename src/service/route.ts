
class AccountRoute {
    public login: string = "/account/login"
    public register: string = "/account/register"
    public profile: string = "/account/profile"
}

class Route extends AccountRoute {
    public home: string = "/"
    public product: string = "/product";
    public dynamicProductPage: string = "/product";

    /**
     * Генерирует динамический маршрут для страницы продукта
     * @param param - Идентификатор продукта (строка или число)
     * @returns Динамический маршрут
     */
    public getDynamicProductPage(param: string | number): string {
        return `${this.dynamicProductPage}/${param}`;
    }

    /**
     * Добавляет параметры поиска к маршруту
     * @param url - Базовый URL
     * @param params - Объект с параметрами поиска
     * @returns URL с добавленными параметрами поиска
     */
    public addSearchParam(url: string, params: { [key: string]: string | number }): string {
        const urlObj = new URL(url, window.location.origin)
        const searchParams = new URLSearchParams(urlObj.search)
        console.log(searchParams, urlObj)
        for(const key in params) {
            if(params.hasOwnProperty(key)) {
                searchParams.set(key, params[key].toString());
            }
        }

        urlObj.search = searchParams.toString();
        return urlObj.toString()
    }
}

const pages = new Route()
export default pages;