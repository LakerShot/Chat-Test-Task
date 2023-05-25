type ParamsData = {
    [key: string]: string
}

export const getQueryParams = (data: ParamsData = {}): string => {
    const urlSearchParams: URLSearchParams = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach(el => {
                urlSearchParams.append(key, el);
            });
        } else {
            urlSearchParams.append(key, value);
        }
    });

    return urlSearchParams.toString();
};
