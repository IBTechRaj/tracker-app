require 'test_helper'
class PostTest < ActiveSupport::TestCase
  def setup
    @user = User.new(username: 'Raja', email: 'testingexample@example.com',
                     password: 'password')
    @curriculum = Curriculum.new(entry_date: '2020-aug-23', name: 'Tech Skills Curriculum',
                                 hours_done: '15', hours_target: '150', modules_done: '20',
                                 modules_target: '35', user_id: @user.id)
  end

  test 'hours should be present' do
    @curriculum.hours_done = ' '
    assert_not @curriculum.valid?
  end

  test 'modules should be present' do
    @curriculum.modules_done = ' '
    assert_not @curriculum.valid?
  end
end
