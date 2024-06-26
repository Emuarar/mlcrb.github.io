$('.sprite').hover(function() {
	var name = this.getAttribute("name").toString();
	$('body').append('<span id="name">' + name + '</span>');
	$('#name').css({
			'position': 'absolute',
			'z-index': '4',
			'background-color': 'rgba(16,0,17,0.9)',
			'padding': '2px',
			'box-shadow': '0 2px 0 rgba(16,0,17,0.95), 0 -2px 0 rgba(16,0,17,0.95), 2px 0 0 rgba(16,0,17,0.95), -2px 0 0 rgba(16,0,17,0.95)',
			'border': '2px solid #210565',
			'line-height': '1.5'
		});
	switch(name) {
		case 'Нити лозы':
			$('#name').css('color', '#00aa00');
			break;
		case 'Устройство Возраждатель':
			$('#name').html('<span style="color: #ffff55">Устройство</span><br><span style="color: #fff">Возраждатель</span>');
			break;
		case 'Смесь для выпечки пирога':
			$('#name').css('color', '#55ffff');
			break;
		case 'Железийный топор Эффективность II':
			$('#name').html('<span style="color: #fff">Железийный топор</span><br><span style="color: #aaa">Эффективность II</span>');
			break;
		case 'Смесь для выпечки печенья':
		case 'Заготовка под броню':
		case 'Уплотнённый снег':
		case 'Стальная заготовка под броню':
		case 'Средний энергоосколок':
		case 'Свекольный набор':
		case 'Грибной набор':
			$('#name').css('color', '#55ff55');
			break;
		case 'Деконструктор':
			$('#name').css('color', '#ffff55');
			break;
		case 'Содалит':
		case 'Содалитовый кристалл':
		case 'Капля энергии':
			$('#name').css('color', '#5555ff');
			break;
		default:
			$('#name').css('color', '#fff');
			break;
		case 'Ножницы Стальные ножницы Пальцы не совать':
			$('#name').html('<span style="color: #fff">Ножницы</span><br><span style="color: #aaa">Стальные ножницы</span><br><span style="color: #aaa">Пальцы не совать</span>');
			break;
	}
}, function() {
	$('#name').remove();
});

$(document).mousemove(function(e) {
	$('#name').css({
		left: e.pageX + 15,
		top: e.pageY - 15
	});
});

function copyToClipboard(elem) {
  let temp = $("<input>");
  $("body").append(temp);
  temp.val($(elem).text()).select();
  document.execCommand("copy");
  temp.remove();
	let next = $(elem).next()
	if (next.is(":hidden")) {
		next.fadeIn(100);
		setTimeout(function() {next.fadeOut()}, 2000);
	}
}

$('.animated').hover(function() {
	$(this).addClass('animated-pause');
	}, function() {
	$(this).removeClass('animated-pause');
});

$(document).ready(
function(e) {
	setInterval(function() {
                $("body").find('.animated').each(function() {
                    if ($(this).hasClass('animated-paused')) {
                        return;
                    }
                    var $nextFrame = advanceFrame(this, '.animated');
                    if ($nextFrame.hasClass('animated-subframe')) {
                        advanceFrame($nextFrame[0], '.animated-subframe');
                    }
                });
            }, 2000);
});
var advanceFrame = function(parentElem, parentSelector) {
                var curFrame = parentElem.querySelector(parentSelector + ' > .animated-active');
                $(curFrame).removeClass('animated-active');
                var $nextFrame = $(curFrame && curFrame.nextElementSibling || parentElem.firstElementChild);
                return $nextFrame.addClass('animated-active');
            };