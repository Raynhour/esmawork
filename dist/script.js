"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = function () {
	function Dog() {
		_classCallCheck(this, Dog);

		this._bark = "gavgavgav";
	}

	_createClass(Dog, [{
		key: "bark",
		value: function bark() {
			console.log(this._bark);
		}
	}]);

	return Dog;
}();

var SubDog = function (_Dog) {
	_inherits(SubDog, _Dog);

	function SubDog(parent) {
		_classCallCheck(this, SubDog);

		var _this = _possibleConstructorReturn(this, (SubDog.__proto__ || Object.getPrototypeOf(SubDog)).call(this));

		_this.parent = parent;
		return _this;
	}

	_createClass(SubDog, [{
		key: "bark",
		value: function bark() {
			this._bark = "gavmewgavmew";
			_get(SubDog.prototype.__proto__ || Object.getPrototypeOf(SubDog.prototype), "bark", this).call(this);
		}
	}]);

	return SubDog;
}(Dog);

var scream = new Dog();
var subscream = new SubDog(scream);

scream.bark();
subscream.bark();