	App
		Layout
			Default 
		Modules  (status report element thing)
			Dashboard (Main status report)
			Posts
		Shared
			Component
			Widgets
				Popup
				Card (Comp name = app-widget-card)
			Shared-seveice.ts ( Data)


App layout is the whole web page, and Modules/dashboard is the status report element.

Modules/dashboard, uses Shared-seveice.ts for data and the Shared/ Widgets/Popup component.
Shared/ Widgets/Popup calls Shared/ Widgets/card, the only reason popup calls called is because I couldn't get the graph neatly into the popup window so I used a component to make sure it doesn't go over popup the window


Note: I'm only passing data to the top right widget pressure one for the pop up. I was trying to think of a better to pass data to the elements