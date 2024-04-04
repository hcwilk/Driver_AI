
import { useState } from "react"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className={`bg-black ${isOpen ? 'h-[500px] md:h-[190px] lg:h-[210px]' : 'h-[8px]'} w-full text-black`}>
            <div className="absolute left-0 right-0 top-2 z-40 pt-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        {
                            isOpen ?
                                <>
                                    <div className="flex items-center justify-between">
                                        <a>
                                            <div className="h-8 sm:hidden">
                                                <svg width="26" height="26" className="h-full w-auto fill-white" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="wheel" fill-rule="evenodd" clip-rule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM14 2.79816C19.1916 3.30082 23.25 7.67647 23.25 13C23.25 14.5104 22.9233 15.9445 22.3368 17.2354L16.8551 14.0706C16.9495 13.7298 17 13.3708 17 13C17 11.1362 15.7252 9.57006 14 9.12602V2.79816ZM13 17C14.1178 17 15.1286 16.5415 15.8544 15.8022L21.3353 18.9667C19.4754 21.5603 16.4351 23.25 13 23.25C9.56509 23.25 6.5248 21.5604 4.6649 18.967L10.1459 15.8025C10.8717 16.5416 11.8823 17 13 17ZM9.14499 14.071C9.0505 13.7301 9 13.371 9 13C9 11.1362 10.2748 9.57006 12 9.12602V2.79816C6.80837 3.30082 2.75 7.67647 2.75 13C2.75 14.5105 3.07674 15.9447 3.6634 17.2358L9.14499 14.071Z"></path></svg>
                                            </div>
                                            <div className="h-8 hidden sm:block">
                                                <svg width="131" height="26" className="h-full w-full fill-white" viewBox="0 0 131 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.333984 19.873V7.31299H4.88002C8.88719 7.31299 10.869 9.83372 10.869 13.5888C10.869 17.3526 8.88711 19.8733 4.88002 19.8733L0.333984 19.873ZM2.94167 17.5696H4.74971C7.06189 17.5696 8.12234 16.1266 8.12234 13.5885C8.12234 11.0503 7.06189 9.60737 4.74971 9.60737H2.94167V17.5696ZM21.656 19.873L18.3877 14.3448H17.6315V19.873H15.0238V7.31299H19.5786C22.421 7.31299 23.6205 8.99063 23.6205 11.0681C23.6205 12.7544 22.6643 13.8496 20.9606 14.2147L24.7417 19.8734L21.656 19.873ZM17.6316 9.47679V12.4756H19.1701C20.5609 12.4756 21.1259 11.8845 21.1259 10.9805C21.1259 10.0852 20.5609 9.4767 19.1701 9.4767L17.6316 9.47679ZM28.3665 19.873V7.31299H30.9742V19.873H28.3665ZM43.9172 7.31299H46.69L42.0483 19.873H39.1798L34.5643 7.31299H37.3285L40.6229 16.8307L43.9172 7.31299ZM57.5727 9.60763H52.9136V12.4587H57.0425V14.7273H52.9136V17.5697H57.5727V19.8732H50.2886V7.31317H57.5727V9.60763ZM68.603 19.873L65.3346 14.3448H64.5784V19.873H61.9707V7.31299H66.5255C69.3679 7.31299 70.5674 8.99063 70.5674 11.0681C70.5674 12.7544 69.6112 13.8496 67.9075 14.2147L71.6886 19.8734L68.603 19.873ZM64.5785 9.47679V12.4756H66.117C67.5078 12.4756 68.0728 11.8845 68.0728 10.9805C68.0728 10.0852 67.5078 9.4767 66.117 9.4767L64.5785 9.47679Z"></path><path id="wheel" fill-rule="evenodd" clip-rule="evenodd" d="M92 26C99.1797 26 105 20.1797 105 13C105 5.8203 99.1797 0 92 0C84.8203 0 79 5.8203 79 13C79 20.1797 84.8203 26 92 26ZM93 2.79816C98.1916 3.30082 102.25 7.67647 102.25 13C102.25 14.5104 101.923 15.9445 101.337 17.2354L95.8551 14.0706C95.9495 13.7298 96 13.3708 96 13C96 11.1362 94.7252 9.57006 93 9.12602V2.79816ZM92 17C93.1178 17 94.1286 16.5415 94.8544 15.8022L100.335 18.9667C98.4754 21.5603 95.4351 23.25 92 23.25C88.5651 23.25 85.5248 21.5604 83.6649 18.967L89.1459 15.8025C89.8717 16.5416 90.8823 17 92 17ZM88.145 14.071C88.0505 13.7301 88 13.371 88 13C88 11.1362 89.2748 9.57006 91 9.12602V2.79816C85.8084 3.30082 81.75 7.67647 81.75 13C81.75 14.5105 82.0767 15.9447 82.6634 17.2358L88.145 14.071Z"></path><path d="M121.751 19.8734L120.838 17.283H115.562L114.649 19.8734H111.98L116.605 7.31299H119.795L124.419 19.8734H121.751ZM116.326 15.1012H120.073L118.204 9.77273L116.326 15.1012ZM128.018 19.8734V7.31299H130.625V19.8734H128.018Z"></path></svg>
                                            </div>
                                        </a>
                                        <button className="group -m-2.5 rounded-md p-2.5 transition hover:bg-neutral-950/10" onClick={() => { setIsOpen(!isOpen) }}>

                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-white group-hover:fill-neutral-200"><path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"></path><path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"></path></svg>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 divide-zinc-800 md:grid-cols-4 md:divide-x text-white h-fit">
                                        <a className="group relative isolate flex items-center justify-center px-2 py-8 text-lg sm:mx-0 sm:px-0 lg:py-5 lg:text-2xl" href="/">Home <span className="absolute inset-y-0 left-0 right-0 -z-10 w-full bg-neutral-900 opacity-0 transition group-hover:opacity-100"></span>
                                        </a>
                                        <a className="group relative isolate flex items-center justify-center px-2 py-8 text-lg sm:mx-0 sm:px-0 lg:py-10 lg:text-2xl" href="/how-it-works">How it Works <span className="absolute inset-y-0 left-0 right-0 -z-10 w-full bg-neutral-900 opacity-0 transition group-hover:opacity-100"></span>
                                        </a>
                                        <a className="group relative isolate flex items-center justify-center px-2 py-8 text-lg sm:mx-0 sm:px-0 lg:py-10 lg:text-2xl" href="/about">About <span className="absolute inset-y-0 left-0 right-0 -z-10 w-full bg-neutral-900 opacity-0 transition group-hover:opacity-100"></span>
                                        </a>
                                        <a className="group relative isolate flex items-center justify-center px-2 py-8 text-lg sm:mx-0 sm:px-0 lg:py-10 lg:text-2xl" href="/contact">Contact <span className="absolute inset-y-0 left-0 right-0 -z-10 w-full bg-neutral-900 opacity-0 transition group-hover:opacity-100"></span>
                                        </a>
                                    </div>

                                </>
                                :
                                <>
                                    <div className="flex items-center justify-between">
                                        <a>
                                            <div className="h-8 sm:hidden">
                                                <svg width="26" height="26" className="h-full w-auto fill-black" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="wheel" fill-rule="evenodd" clip-rule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM14 2.79816C19.1916 3.30082 23.25 7.67647 23.25 13C23.25 14.5104 22.9233 15.9445 22.3368 17.2354L16.8551 14.0706C16.9495 13.7298 17 13.3708 17 13C17 11.1362 15.7252 9.57006 14 9.12602V2.79816ZM13 17C14.1178 17 15.1286 16.5415 15.8544 15.8022L21.3353 18.9667C19.4754 21.5603 16.4351 23.25 13 23.25C9.56509 23.25 6.5248 21.5604 4.6649 18.967L10.1459 15.8025C10.8717 16.5416 11.8823 17 13 17ZM9.14499 14.071C9.0505 13.7301 9 13.371 9 13C9 11.1362 10.2748 9.57006 12 9.12602V2.79816C6.80837 3.30082 2.75 7.67647 2.75 13C2.75 14.5105 3.07674 15.9447 3.6634 17.2358L9.14499 14.071Z"></path></svg>
                                            </div>
                                            <div className="h-8 hidden sm:block">
                                                <svg width="131" height="26" className="h-full w-full fill-black" viewBox="0 0 131 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.333984 19.873V7.31299H4.88002C8.88719 7.31299 10.869 9.83372 10.869 13.5888C10.869 17.3526 8.88711 19.8733 4.88002 19.8733L0.333984 19.873ZM2.94167 17.5696H4.74971C7.06189 17.5696 8.12234 16.1266 8.12234 13.5885C8.12234 11.0503 7.06189 9.60737 4.74971 9.60737H2.94167V17.5696ZM21.656 19.873L18.3877 14.3448H17.6315V19.873H15.0238V7.31299H19.5786C22.421 7.31299 23.6205 8.99063 23.6205 11.0681C23.6205 12.7544 22.6643 13.8496 20.9606 14.2147L24.7417 19.8734L21.656 19.873ZM17.6316 9.47679V12.4756H19.1701C20.5609 12.4756 21.1259 11.8845 21.1259 10.9805C21.1259 10.0852 20.5609 9.4767 19.1701 9.4767L17.6316 9.47679ZM28.3665 19.873V7.31299H30.9742V19.873H28.3665ZM43.9172 7.31299H46.69L42.0483 19.873H39.1798L34.5643 7.31299H37.3285L40.6229 16.8307L43.9172 7.31299ZM57.5727 9.60763H52.9136V12.4587H57.0425V14.7273H52.9136V17.5697H57.5727V19.8732H50.2886V7.31317H57.5727V9.60763ZM68.603 19.873L65.3346 14.3448H64.5784V19.873H61.9707V7.31299H66.5255C69.3679 7.31299 70.5674 8.99063 70.5674 11.0681C70.5674 12.7544 69.6112 13.8496 67.9075 14.2147L71.6886 19.8734L68.603 19.873ZM64.5785 9.47679V12.4756H66.117C67.5078 12.4756 68.0728 11.8845 68.0728 10.9805C68.0728 10.0852 67.5078 9.4767 66.117 9.4767L64.5785 9.47679Z"></path><path id="wheel" fill-rule="evenodd" clip-rule="evenodd" d="M92 26C99.1797 26 105 20.1797 105 13C105 5.8203 99.1797 0 92 0C84.8203 0 79 5.8203 79 13C79 20.1797 84.8203 26 92 26ZM93 2.79816C98.1916 3.30082 102.25 7.67647 102.25 13C102.25 14.5104 101.923 15.9445 101.337 17.2354L95.8551 14.0706C95.9495 13.7298 96 13.3708 96 13C96 11.1362 94.7252 9.57006 93 9.12602V2.79816ZM92 17C93.1178 17 94.1286 16.5415 94.8544 15.8022L100.335 18.9667C98.4754 21.5603 95.4351 23.25 92 23.25C88.5651 23.25 85.5248 21.5604 83.6649 18.967L89.1459 15.8025C89.8717 16.5416 90.8823 17 92 17ZM88.145 14.071C88.0505 13.7301 88 13.371 88 13C88 11.1362 89.2748 9.57006 91 9.12602V2.79816C85.8084 3.30082 81.75 7.67647 81.75 13C81.75 14.5105 82.0767 15.9447 82.6634 17.2358L88.145 14.071Z"></path><path d="M121.751 19.8734L120.838 17.283H115.562L114.649 19.8734H111.98L116.605 7.31299H119.795L124.419 19.8734H121.751ZM116.326 15.1012H120.073L118.204 9.77273L116.326 15.1012ZM128.018 19.8734V7.31299H130.625V19.8734H128.018Z"></path></svg>
                                            </div>
                                        </a>
                                        <button className="group -m-2.5 rounded-md p-2.5 transition hover:bg-neutral-950/10" onClick={() => { setIsOpen(!isOpen) }}>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700"><path d="M2 6h20v2H2zM2 16h20v2H2z"></path></svg>

                                        </button>
                                    </div>
                                </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}