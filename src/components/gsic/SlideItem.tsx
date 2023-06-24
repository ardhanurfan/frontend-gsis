import clsx from "clsx"

type SlideItemProps = {
    className?: string
    type: "text" | "tech" | "art" | "buss" | "collab"
    active: boolean
}

function SlideItem({ className, type, active }: SlideItemProps) {
    return (
        <div className={clsx(className, "w-[33vw] flex justify-center")}>
            <div 
                className={clsx("relative w-80 h-80 rounded-full bg-white shadow-xl flex justify-center items-center duration-200", 
                !active && "shadow-slate-300",
                type === "text" && "shadow-primaryBlue", 
                type === "tech" && "shadow-seccondaryGreen",
                type === "buss" && "shadow-primaryYellow",
                type === "art" && "shadow-primaryBlue",
                type === "collab" && "shadow-primaryOrange"
                )}
            >
                {/* <div className={clsx("absolute w-80 h-80 bg-white/90 rounded-full duration-1000", active && "z-[-1]", !active && "z-[1]")}>

                </div> */}
                <div className={clsx("duration-1000",!active && "opacity-20")}>
                    {
                        type === "text" ? text : 
                        type === "tech" ? tech :
                        type === "buss" ? buss :
                        type === "art" ? art :
                        collab
                    }
                </div>
            </div>
        </div>
    )
}

const text = <svg xmlns="http://www.w3.org/2000/svg" width="142" height="141" viewBox="0 0 142 141" fill="none">
    <path d="M101.747 5.40091L86.4485 20.7268L120.836 55.114L136.134 39.8156C142.149 33.8006 142.149 24.0777 136.134 18.0627L123.5 5.40091C117.485 -0.614105 107.762 -0.614105 101.747 5.40091ZM79.6645 26.3573L77.1376 27.1264L37.5594 38.9916C32.0937 40.6396 27.7541 44.8144 25.9413 50.2526L1.60661 122.817C0.562906 125.921 1.33195 129.382 3.61161 131.716L45.7991 89.5562C44.9751 87.8258 44.5082 85.9032 44.5082 83.8708C44.5082 76.5923 50.4134 70.6872 57.6918 70.6872C64.9703 70.6872 70.8754 76.5923 70.8754 83.8708C70.8754 91.1492 64.9703 97.0543 57.6918 97.0543C55.6593 97.0543 53.7367 96.5874 52.0064 95.7634L9.81889 137.951C12.1809 140.231 15.6142 141.027 18.7178 139.956L91.31 115.621C96.7207 113.808 100.923 109.469 102.571 104.003L114.436 64.4249L115.205 61.8981L79.6645 26.3573Z" fill="#005CBA" />
</svg>

const tech = <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170" fill="none">
    <path d="M58.6953 8.22266C58.6953 3.83911 55.1687 0.3125 50.7852 0.3125C46.4016 0.3125 42.875 3.83911 42.875 8.22266V21.4062C31.2405 21.4062 21.7812 30.8655 21.7812 42.5H8.59766C4.21411 42.5 0.6875 46.0266 0.6875 50.4102C0.6875 54.7937 4.21411 58.3203 8.59766 58.3203H21.7812V76.7773H8.59766C4.21411 76.7773 0.6875 80.304 0.6875 84.6875C0.6875 89.071 4.21411 92.5977 8.59766 92.5977H21.7812V111.055H8.59766C4.21411 111.055 0.6875 114.581 0.6875 118.965C0.6875 123.348 4.21411 126.875 8.59766 126.875H21.7812C21.7812 138.51 31.2405 147.969 42.875 147.969V161.152C42.875 165.536 46.4016 169.062 50.7852 169.062C55.1687 169.062 58.6953 165.536 58.6953 161.152V147.969H77.1523V161.152C77.1523 165.536 80.679 169.062 85.0625 169.062C89.446 169.062 92.9727 165.536 92.9727 161.152V147.969H111.43V161.152C111.43 165.536 114.956 169.062 119.34 169.062C123.723 169.062 127.25 165.536 127.25 161.152V147.969C138.885 147.969 148.344 138.51 148.344 126.875H161.527C165.911 126.875 169.438 123.348 169.438 118.965C169.438 114.581 165.911 111.055 161.527 111.055H148.344V92.5977H161.527C165.911 92.5977 169.438 89.071 169.438 84.6875C169.438 80.304 165.911 76.7773 161.527 76.7773H148.344V58.3203H161.527C165.911 58.3203 169.438 54.7937 169.438 50.4102C169.438 46.0266 165.911 42.5 161.527 42.5H148.344C148.344 30.8655 138.885 21.4062 127.25 21.4062V8.22266C127.25 3.83911 123.723 0.3125 119.34 0.3125C114.956 0.3125 111.43 3.83911 111.43 8.22266V21.4062H92.9727V8.22266C92.9727 3.83911 89.446 0.3125 85.0625 0.3125C80.679 0.3125 77.1523 3.83911 77.1523 8.22266V21.4062H58.6953V8.22266ZM53.4219 42.5H116.703C122.537 42.5 127.25 47.2131 127.25 53.0469V116.328C127.25 122.162 122.537 126.875 116.703 126.875H53.4219C47.5881 126.875 42.875 122.162 42.875 116.328V53.0469C42.875 47.2131 47.5881 42.5 53.4219 42.5ZM116.703 53.0469H53.4219V116.328H116.703V53.0469Z" fill="#BBD578" />
</svg>

const buss = <svg xmlns="http://www.w3.org/2000/svg" width="177" height="141" viewBox="0 0 177 141" fill="none">
    <path d="M51.4746 13.5586H91.0254C92.2339 13.5586 93.2227 14.5474 93.2227 15.7559V26.7422H49.2773V15.7559C49.2773 14.5474 50.2661 13.5586 51.4746 13.5586ZM36.0938 15.7559V26.7422H18.5156C8.82019 26.7422 0.9375 34.6249 0.9375 44.3203V70.6875H53.6719H97.6172H99.8694C108.741 59.9484 122.144 53.1094 137.168 53.1094C138.651 53.1094 140.107 53.1643 141.562 53.3016V44.3203C141.562 34.6249 133.68 26.7422 123.984 26.7422H106.406V15.7559C106.406 7.26892 99.5123 0.375 91.0254 0.375H51.4746C42.9877 0.375 36.0938 7.26892 36.0938 15.7559ZM88.8281 97.0547H62.4609C57.5995 97.0547 53.6719 93.1271 53.6719 88.2656V79.4766H0.9375V114.633C0.9375 124.328 8.82019 132.211 18.5156 132.211H99.8694C92.9755 123.861 88.8281 113.122 88.8281 101.449C88.8281 99.9661 88.8831 98.5104 89.0204 97.0547H88.8281ZM176.719 101.449C176.719 90.9597 172.552 80.8998 165.135 73.4826C157.717 66.0654 147.657 61.8984 137.168 61.8984C126.678 61.8984 116.619 66.0654 109.201 73.4826C101.784 80.8998 97.6172 90.9597 97.6172 101.449C97.6172 111.939 101.784 121.999 109.201 129.416C116.619 136.833 126.678 141 137.168 141C147.657 141 157.717 136.833 165.135 129.416C172.552 121.999 176.719 111.939 176.719 101.449ZM137.168 79.4766C139.585 79.4766 141.562 81.4541 141.562 83.8711V97.0547H150.352C152.769 97.0547 154.746 99.0322 154.746 101.449C154.746 103.866 152.769 105.844 150.352 105.844H137.168C134.751 105.844 132.773 103.866 132.773 101.449V83.8711C132.773 81.4541 134.751 79.4766 137.168 79.4766Z" fill="#FFC500" />
</svg>

const art = <svg xmlns="http://www.w3.org/2000/svg" width="169" height="170" viewBox="0 0 169 170" fill="none">
    <path d="M168.812 85.3125C168.812 85.6091 168.812 85.9058 168.812 86.2024C168.681 98.2324 157.738 106.406 145.708 106.406H113.441C104.707 106.406 97.6211 113.492 97.6211 122.227C97.6211 123.347 97.7529 124.435 97.9507 125.49C98.6428 128.851 100.093 132.081 101.51 135.344C103.521 139.893 105.498 144.408 105.498 149.187C105.498 159.668 98.3792 169.193 87.8982 169.622C86.7446 169.655 85.5911 169.688 84.4045 169.688C37.8335 169.688 0.0625 131.917 0.0625 85.3125C0.0625 38.7085 37.8335 0.9375 84.4375 0.9375C131.042 0.9375 168.812 38.7085 168.812 85.3125ZM42.25 95.8594C42.25 93.0622 41.1388 90.3795 39.1609 88.4016C37.183 86.4237 34.5003 85.3125 31.7031 85.3125C28.9059 85.3125 26.2233 86.4237 24.2454 88.4016C22.2674 90.3795 21.1562 93.0622 21.1562 95.8594C21.1562 98.6566 22.2674 101.339 24.2454 103.317C26.2233 105.295 28.9059 106.406 31.7031 106.406C34.5003 106.406 37.183 105.295 39.1609 103.317C41.1388 101.339 42.25 98.6566 42.25 95.8594ZM42.25 64.2188C45.0472 64.2188 47.7298 63.1076 49.7078 61.1296C51.6857 59.1517 52.7969 56.4691 52.7969 53.6719C52.7969 50.8747 51.6857 48.192 49.7078 46.2141C47.7298 44.2362 45.0472 43.125 42.25 43.125C39.4528 43.125 36.7702 44.2362 34.7922 46.2141C32.8143 48.192 31.7031 50.8747 31.7031 53.6719C31.7031 56.4691 32.8143 59.1517 34.7922 61.1296C36.7702 63.1076 39.4528 64.2188 42.25 64.2188ZM94.9844 32.5781C94.9844 29.7809 93.8732 27.0983 91.8953 25.1204C89.9173 23.1424 87.2347 22.0312 84.4375 22.0312C81.6403 22.0312 78.9577 23.1424 76.9797 25.1204C75.0018 27.0983 73.8906 29.7809 73.8906 32.5781C73.8906 35.3753 75.0018 38.058 76.9797 40.0359C78.9577 42.0138 81.6403 43.125 84.4375 43.125C87.2347 43.125 89.9173 42.0138 91.8953 40.0359C93.8732 38.058 94.9844 35.3753 94.9844 32.5781ZM126.625 64.2188C129.422 64.2188 132.105 63.1076 134.083 61.1296C136.061 59.1517 137.172 56.4691 137.172 53.6719C137.172 50.8747 136.061 48.192 134.083 46.2141C132.105 44.2362 129.422 43.125 126.625 43.125C123.828 43.125 121.145 44.2362 119.167 46.2141C117.189 48.192 116.078 50.8747 116.078 53.6719C116.078 56.4691 117.189 59.1517 119.167 61.1296C121.145 63.1076 123.828 64.2188 126.625 64.2188Z" fill="#005CBA" />
</svg>

const collab = <svg xmlns="http://www.w3.org/2000/svg" width="212" height="170" viewBox="0 0 212 170" fill="none">
    <path d="M24.6055 29.9414C24.6055 25.0463 26.55 20.3517 30.0114 16.8903C33.4728 13.4289 38.1674 11.4844 43.0625 11.4844C47.9576 11.4844 52.6522 13.4289 56.1136 16.8903C59.575 20.3517 61.5195 25.0463 61.5195 29.9414C61.5195 34.8365 59.575 39.5311 56.1136 42.9925C52.6522 46.4539 47.9576 48.3984 43.0625 48.3984C38.1674 48.3984 33.4728 46.4539 30.0114 42.9925C26.55 39.5311 24.6055 34.8365 24.6055 29.9414ZM21.9688 81.9177C18.6729 85.6091 16.6953 90.52 16.6953 95.8594C16.6953 101.199 18.6729 106.11 21.9688 109.801V81.9177ZM69.5615 65.6689C59.7727 74.3372 53.6094 87.0264 53.6094 101.133C53.6094 112.438 57.5645 122.82 64.1562 130.961V138.047C64.1562 143.881 59.4431 148.594 53.6094 148.594H32.5156C26.6819 148.594 21.9688 143.881 21.9688 138.047V129.214C9.51025 123.281 0.875 110.592 0.875 95.8594C0.875 75.4578 17.3875 58.9453 37.7891 58.9453H48.3359C56.2461 58.9453 63.563 61.4172 69.5615 65.636V65.6689ZM148.531 138.047V130.961C155.123 122.82 159.078 112.438 159.078 101.133C159.078 87.0264 152.915 74.3372 143.126 65.636C149.125 61.4172 156.441 58.9453 164.352 58.9453H174.898C195.3 58.9453 211.812 75.4578 211.812 95.8594C211.812 110.592 203.177 123.281 190.719 129.214V138.047C190.719 143.881 186.006 148.594 180.172 148.594H159.078C153.244 148.594 148.531 143.881 148.531 138.047ZM151.168 29.9414C151.168 25.0463 153.113 20.3517 156.574 16.8903C160.035 13.4289 164.73 11.4844 169.625 11.4844C174.52 11.4844 179.215 13.4289 182.676 16.8903C186.137 20.3517 188.082 25.0463 188.082 29.9414C188.082 34.8365 186.137 39.5311 182.676 42.9925C179.215 46.4539 174.52 48.3984 169.625 48.3984C164.73 48.3984 160.035 46.4539 156.574 42.9925C153.113 39.5311 151.168 34.8365 151.168 29.9414ZM190.719 81.9177V109.834C194.015 106.11 195.992 101.232 195.992 95.8923C195.992 90.553 194.015 85.6421 190.719 81.9507V81.9177ZM106.344 11.4844C111.938 11.4844 117.303 13.7067 121.259 17.6626C125.215 21.6184 127.438 26.9837 127.438 32.5781C127.438 38.1725 125.215 43.5378 121.259 47.4937C117.303 51.4495 111.938 53.6719 106.344 53.6719C100.749 53.6719 95.3841 51.4495 91.4282 47.4937C87.4724 43.5378 85.25 38.1725 85.25 32.5781C85.25 26.9837 87.4724 21.6184 91.4282 17.6626C95.3841 13.7067 100.749 11.4844 106.344 11.4844ZM79.9766 101.133C79.9766 106.472 81.9541 111.35 85.25 115.074V87.1912C81.9541 90.9155 79.9766 95.7935 79.9766 101.133ZM127.438 87.1912V115.107C130.733 111.383 132.711 106.505 132.711 101.166C132.711 95.8264 130.733 90.9155 127.438 87.2241V87.1912ZM148.531 101.133C148.531 115.865 139.896 128.555 127.438 134.487V148.594C127.438 154.427 122.724 159.141 116.891 159.141H95.7969C89.9631 159.141 85.25 154.427 85.25 148.594V134.487C72.7915 128.555 64.1562 115.865 64.1562 101.133C64.1562 80.7312 80.6687 64.2188 101.07 64.2188H111.617C132.019 64.2188 148.531 80.7312 148.531 101.133Z" fill="#ED6010" />
</svg>

export default SlideItem