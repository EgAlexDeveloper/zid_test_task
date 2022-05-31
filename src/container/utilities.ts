let i: number = 1;

export const Logger = (data: any) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`%c .... LOGGING .... ${i}`, "color: red; font-size: 20px; font-wight: blod;");
        console.log(data);
    }

    i++;
}

export const hideScroll = (element: HTMLElement, isActiveScroll: boolean) => {
    element.style.overflow = isActiveScroll ? 'auto' : 'hidden';
};