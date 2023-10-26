import { juniorDataArray, seniorDataArray } from "./mockdata.js";

const juniorContainer = document.getElementById("juniorDiv");
juniorDataArray.forEach(user => {
    juniorContainer.insertAdjacentHTML('beforeend', `
        <div class="memberelement">
            <div class="memberphoto">
                <img src=${user.imgHref} alt="photo" class="image">
            </div>
            <div class="membername">
                <div class="lilink">
                    <a href=${user.lilink} class="link">
                        <p class="name">
                            ${user.name}
                        </p>
                    </a>
                </div>
            </div>
        </div>
    `);
});

const seniorContainer = document.getElementById("seniorDiv");
seniorDataArray.forEach(user => {
    seniorContainer.insertAdjacentHTML('beforeend', `
        <div class="memberelement">
            <div class="memberphoto">
                <img src=${user.imgHref} alt="photo" class="image">
            </div>
            <div class="membername">
                <div class="lilink">
                    <a href=${user.lilink} class="link">
                        <p class="name">
                            ${user.name}
                        </p>
                    </a>
                </div>
            </div>
        </div>
    `);
});
