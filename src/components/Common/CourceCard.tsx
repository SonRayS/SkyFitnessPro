import "../../css/style.css";

type FiltersItemType = {
    id: number;
    cursName: string;
    progress: number;
};

export function CourseCard({ id, cursName, progress }: FiltersItemType) {
    const url: string = "UserPage"; /* page point */ /* "MainPage" */

    const size = url === "UserPage" ? `h-hCard` : `h-selectorBlockMainH`;

    function setImg() {
        if (cursName === "Йога") {
            return "yoga_female_sm.png";
        } else if (cursName === "Стретчинг") {
            return "stretching_female_sm.png";
        } else {
            return "zumba_female_sm.png";
        }
    }

    return (
        <>
            <div className={`${size} w-wCard rounded-3xl bg-white`} key={id}>
                <div className="relative mb-6">
                    <img
                        className="rounded-3xl object-contain"
                        src={`/images/images_small/${setImg()}`}
                        alt=""
                    />
                    <div className="absolute top-0 right-0">
                        {url === "UserPage" ? (
                            <img
                                className="w-8 h-8 m-5 cursor-default"
                                src="/icons/minus_icon.svg"
                                alt=""
                                title="Удалить курс"
                            />
                        ) : (
                            <img
                                className="w-8 h-8 m-5 cursor-default"
                                src="/icons/plus_icon.svg"
                                alt=""
                                title="Добавить курс"
                            />
                        )}
                    </div>
                </div>

                <div className="rounded-12px list-none w-72 h-72 mx-8 flex flex-col">
                    <div>
                        <h1 className="flex flex-row mb-0.5 text-3xl">
                            {cursName}
                        </h1>
                        <div className="flex flex-wrap mb-0.5">
                            <div className="flex m-1.5 items-center content-center">
                                <img
                                    src="/icons/calendar_icon.svg"
                                    alt=""
                                    className="w-4 h-4 m-2"
                                />
                                <p className="text-base">25 дней</p>
                            </div>
                            <div className="flex m-1.5 items-center content-center">
                                <img
                                    src="/icons/clockface_icon.svg"
                                    alt=""
                                    className="w-4 h-4 m-2"
                                />
                                <p className="text-base">20-50 мин/день</p>
                            </div>
                            <div className="flex m-1.5 items-center content-center">
                                <img
                                    src="/icons/difficult_icon.svg"
                                    alt=""
                                    className="w-4 h-4 m-2"
                                />
                                <p className="text-base">Сложность</p>
                            </div>
                        </div>

                        {url === "UserPage" && (
                            <div className="mb-10">
                                <p className="bg-colorProgress flex justify-start text-lg">
                                    Прогресс {progress}%
                                </p>
                                <progress
                                    className="inline-block align-middle appearance-none h-1.5 w-72"
                                    value={progress}
                                    max="100"
                                ></progress>
                            </div>
                        )}
                    </div>
                    {url === "UserPage" && (
                        <button className="rounded-3xl h-12 w-72 flex justify-center items-center content-center bg-colorGreen text-xl">
                            <h2>
                                {progress === 0 && "Начать тренировку"}
                                {progress === 100 && "Начать заново"}
                                {progress > 0 &&
                                    progress !== 100 &&
                                    "Продолжить"}
                            </h2>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
