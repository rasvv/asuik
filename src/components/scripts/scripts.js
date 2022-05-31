export default {
	data() {
		return {
			mainlineheight: 30,
			lineheight: 15,
			activeCeh: 7
		};
	},
	computed: {
		hheight3() {
			return {
				height: `${this.mainlineheight * 3}px`
			}
		},
		hheight2() {
			return {
				height: `${this.mainlineheight * 2}px`
			}
		},
		hheight1() {
			return {
				height: `${this.mainlineheight}px`
			}
		},
	}
}
