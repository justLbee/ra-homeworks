const Calendar = ({date}) => {
	if (!date) {
		return null
	} else {
		// Сколько дней в месяце
		Date.prototype.daysInMonth = function () {
			return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
		};

		// Последний день предыдущего месяца
		function getLastMonthDays(yourDate) {
			return new Date(yourDate.getFullYear(), yourDate.getMonth() - 1, 31).getDate();
		}

		// Первый день этого месяца - какой день недели
		function dayOfWeekThisMonth(myDate) {
			return new Date(myDate.getFullYear(), myDate.getMonth(), 1).getDay();
		}

		const firstWeek = [], secondWeek = [], thirdWeek = [], thisMonthLastDays = [], nextMonthDays = [],
			thisMonthFirstDays = [], lastMonthDays = [];
		const today = date.getDate();
		const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября',
			'Ноября', 'Декабря'];
		const monthNamesNominative = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь',
			'Ноябрь', 'Декабрь'];
		const dayNames = ['Воскресенье', 'Понедельник', 'Вторник' ,'Среда', 'Четверг', 'Пятница', 'Суббота'];

		const todayDay = dayNames[date.getDay()];
		const todayMonth = monthNames[date.getMonth()];
		const todayMonthNom = monthNamesNominative[date.getMonth()];

		if (dayOfWeekThisMonth(date) !== 0) {
			const lastMonthDaysNum = 7 - dayOfWeekThisMonth(date);

			for (let i = 0; i < lastMonthDaysNum; i++) {
				lastMonthDays.push(getLastMonthDays(date) - i)
			}
			for (let i = 0; i < 7 - lastMonthDaysNum; i++) {
				thisMonthFirstDays.push(i + 1)
			}

			for (let i = thisMonthFirstDays[thisMonthFirstDays.length - 1] + 1; i < thisMonthFirstDays[thisMonthFirstDays.length - 1] + 8; i++) {
				firstWeek.push(i);

			}

			for (let i = firstWeek[firstWeek.length - 1] + 1; i < firstWeek[firstWeek.length - 1] + 8; i++) {
				secondWeek.push(i);
			}

			for (let i = secondWeek[secondWeek.length - 1] + 1; i < secondWeek[secondWeek.length - 1] + 8; i++) {
				thirdWeek.push(i);
			}

			for (let i = thirdWeek[thirdWeek.length - 1] + 1; i <= date.daysInMonth(); i++) {
				thisMonthLastDays.push(i);
			}

			for (let i = 0; i < 7 - thisMonthLastDays.length; i++) {
				nextMonthDays.push(i + 1)
			}
		}

		return (
			<div className="ui-datepicker">
				<div className="ui-datepicker-material-header">
					<div className="ui-datepicker-material-day">{todayDay}</div>
					<div className="ui-datepicker-material-date">
						<div className="ui-datepicker-material-day-num">{today}</div>
						<div className="ui-datepicker-material-month">{todayMonth}</div>
						<div className="ui-datepicker-material-year">{date.getFullYear()}</div>
					</div>
				</div>
				<div className="ui-datepicker-header">
					<div className="ui-datepicker-title">
						<span className="ui-datepicker-month">{todayMonthNom}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
					</div>
				</div>
				<table className="ui-datepicker-calendar">
					<colgroup>
						<col/>
						<col/>
						<col/>
						<col/>
						<col/>
						<col className="ui-datepicker-week-end"/>
						<col className="ui-datepicker-week-end"/>
					</colgroup>
					<thead>
					<tr>
						<th scope="col" title="Понедельник">Пн</th>
						<th scope="col" title="Вторник">Вт</th>
						<th scope="col" title="Среда">Ср</th>
						<th scope="col" title="Четверг">Чт</th>
						<th scope="col" title="Пятница">Пт</th>
						<th scope="col" title="Суббота">Сб</th>
						<th scope="col" title="Воскресенье">Вс</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						{lastMonthDays.reverse().map(item =>
								<td className="ui-datepicker-other-month">{item}</td>
						)}

						{thisMonthFirstDays.map(item =>
						(item === today) ? <td className="ui-datepicker-today">{item}</td>:<td>{item}</td>
						)}
					</tr>

					<tr>
						{firstWeek.map(item =>
							(item === today) ? <td className="ui-datepicker-today">{item}</td>:<td>{item}</td>
						)}
					</tr>

					<tr>
						{secondWeek.map(item =>
							(item === today) ? <td className="ui-datepicker-today">{item}</td>:<td>{item}</td>
						)}
					</tr>

					<tr>
						{thirdWeek.map(item =>
							(item === today) ? <td className="ui-datepicker-today">{item}</td>:<td>{item}</td>
						)}
					</tr>

					<tr>
						{thisMonthLastDays.map(item =>
							(item === today) ? <td className="ui-datepicker-today">{item}</td>:<td>{item}</td>
						)}

						{nextMonthDays.map(item =>
							<td className="ui-datepicker-other-month">{item}</td>
						)}
					</tr>
					</tbody>
				</table>
			</div>
		)
	}
}