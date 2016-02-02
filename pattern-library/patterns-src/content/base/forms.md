---
title: Forms
---
## Forms

### Examples
<form>
	<fieldset>
		<legend>Form title</legend>
		
		<p>Required fields are followed by <strong><abbr title="required">&#42;</abbr></strong>.</p>
		
		<div class="form-row">
			<label for="textInput">Test text input</label>
			<input id="textInput" type="text" />
		</div><!-- .form-row -->

		<div class="form-row">
			<label for="emailInput">Test email input</label>
			<input id="emailInput" type="email" />
		</div><!-- .form-row -->
		
		<div class="form-row">
			<label for="urlInput">Test url input</label>
			<input id="urlInput" type="url" />
		</div><!-- .form-row -->
		
		<div class="form-row">
			<label for="passwordInput">Test password input</label>
			<input id="passwordInput" type="password" />
		</div><!-- .form-row -->
		
		<div class="form-row">
			<label for="searchInput">Test search input</label>
			<input id="searchInput" type="search" />
		</div><!-- .form-row -->
		
		<div class="form-row">
			<label for="telInput">Test tel input</label>
			<input id="telInput" type="tel" />
		</div><!-- .form-row -->
		
		<div class="form-row">
			<label for="numberInput">Test number input</label>
			<input id="numberInput" type="number" />
		</div><!-- .form-row -->
		
		<div class="form-row">
			<label for="textArea">Test textarea</label>
			<textarea id="textArea">Write your stuff here</textarea>
		</div><!-- .form-row -->
		
		<div class="form-row">
			<label for="myFruit">Pick a fruit</label>
			<select id="myFruit" name="fruit">
				<option value="orange">Banana</option>
				<option>Cherry</option>
				<optgroup label="berries">
				<option>Blueberry</option>
				<option>Raspberry</option>
				<option>Strawberry</option>
				</optgroup>
			</select>
		</div><!-- .form-row -->

		<input type="submit" value="Submit">
	</fieldset>
</form>

### Code
```html

```