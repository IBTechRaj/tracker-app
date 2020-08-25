# frozen_string_literal: true

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(username: 'Raja',  email: 'testingexample@example.com', password: 'password')
  end

  test 'user should be valid' do
    assert @user.valid?
  end

  test 'name should be present' do
    @user.username = ' '
    assert_not @user.valid?
  end

  test 'email should be present' do
    @user.email = ' '
    assert_not @user.valid?
  end

  test 'password should be present' do
    @user.password = ''
    assert_not @user.nil?
  end

end
