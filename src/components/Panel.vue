<template>
    <div class="panel-component">
        <div class="panel">
            <audio src=""></audio>
            <div 
                class="panel-item" 
                v-for="item, idx in colors" 
                :key="idx" 
                :ref="item"
                :class="item"
                @click="panelClicked($event.currentTarget)"    
            >
            </div>
        </div>
        <div class="level">
            <div class="level-item">
                <label for="easy">Easy</label>
                <input :disabled="gameProccess" type="radio" name="level" id="easy" value="easy" v-model="level" checked>
            </div>
            <div class="level-item">
                <label for="normal">Normal</label>
                <input :disabled="gameProccess" type="radio" name="level" id="normal" value="normal" v-model="level">
            </div>
            <div class="level-item">
                <label for="hard">Hard</label>
                <input :disabled="gameProccess" type="radio" name="level" id="hard" value="hard" v-model="level">
            </div>
        </div>
        <h3>Round: {{round}}</h3>
        <button :disabled="gameProccess" @click="startFlashing">Start</button>
    </div>
</template>

<script>
export default {
    name: "Panel",
    data() {
        return {
            colors: ['blue', 'red', 'yellow', 'green'],
            canClick: false,
            sequence: [],
            sequenceToGuess: [],
            round: 0,
            level: 'easy',
            gameProccess: false
        }
    },
    mounted() {
        
        this.sequence = [this.getRandomPanel()]
        this.sequenceToGuess = [...this.sequence]
    },
    methods: {
        getRandomPanel() {
            let blue = this.$refs.blue[0]
            let red = this.$refs.red[0]
            let yellow = this.$refs.yellow[0]
            let green = this.$refs.green[0]
            const panels = [blue, red, yellow, green]
            return panels[parseInt(Math.random() * panels.length)]
        },
        playAudio(panelClicked) {
            let audio
            switch (panelClicked.classList[1]) {
                case 'blue': audio = new Audio(require('../assets/audio/sounds_2.mp3'))
                    break;
                case 'red': audio = new Audio(require('../assets/audio/sounds_1.mp3'))
                    break;
                case 'yellow': audio = new Audio(require('../assets/audio/sounds_3.mp3'))
                    break;
                case 'green': audio = new Audio(require('../assets/audio/sounds_4.mp3'))
                    break;
                default:
                    break;
            }    
            return audio.play()
        },

        flash(panel) {
            return new Promise(async(resolve, reject) => {
                let level
                switch (this.level) {
                    case 'easy': level = 1500
                        break;
                    case 'normal': level = 1000
                        break;
                    case 'hard': level = 400
                        break;
                
                    default:
                        break;
                }
                this.playAudio(panel)
                panel.classList.add('active')
                await setTimeout(() => {
                    panel.classList.remove('active')
                    setTimeout(() => {
                        resolve()
                    }, 250)
                }, level)
            })
        },

        panelClicked(panelClicked) {
            if(!this.canClick) return
            const expectedPanel = this.sequenceToGuess.shift()
            if(expectedPanel === panelClicked) {
                this.playAudio(panelClicked)
                console.log(expectedPanel,'-expectedPanel', panelClicked, '-panelClicked');
                if(this.sequenceToGuess.length === 0) {
                    this.sequence.push(this.getRandomPanel())
                    this.sequenceToGuess = [...this.sequence]
                    this.startFlashing()
                    this.round++
                }
            }
            else {
                alert('Game Over')
                this.round = 0
                this.gameProccess = false
                this.canClick = false
                this.sequence = [this.getRandomPanel()]
                this.sequenceToGuess = [...this.sequence]
                console.log(this.sequence, 'else');
            }
        },

        async startFlashing() {
            this.gameProccess = true
            this.canClick = false
            for (const panel of this.sequence) {
                await this.flash(panel);
                console.log(panel, 'panel');
            }
            this.canClick = true
        },

    }
    


}
</script>

<style lang="scss" scoped>
    button {
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 5px;
        background: green;
        cursor: pointer;
        color: white;
        font-size: 24px;

    }
    .panel {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 0 auto;
        &-item {
            position: absolute;
            width: 100px;
            height: 100px;
            cursor: pointer;
            &:hover {
                box-shadow: inset 2px 1px 2px rgb(139, 139, 139);
            }
            &:active {
                background-color: white;
            }
        }
    }
    .active {
        background-color: white !important;
    }
    .blue {
        background: rgba(0, 0, 255, 0.486);
        border-top-left-radius: 100%;
        left: 0;
    }
    .red {
        background: rgba(255, 0, 0, 0.486);
        border-top-right-radius: 100%;
        right: 0;
    }
    .yellow {
        background: rgba(255, 255, 0, 0.486);
        border-bottom-left-radius: 100%;
        bottom: 0;
        left: 0;
    }
    .green {
        background: rgba(0, 128, 0, 0.486);
        border-bottom-right-radius: 100%;
        bottom: 0;
        right: 0;
    }
    .level {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        &-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 5px;
        }
    }
</style>
